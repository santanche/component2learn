/* DCC Rule Transition
  ********************/

class RuleDCCTransition extends RuleDCCCell {
   connectedCallback() {
      if (!this.hasAttribute("transition"))
         this.transition = "?_>_?";
      this._decomposeTransition(this.transition);
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return RuleDCCCell.observedAttributes.concat(["transition"]);
   }

   get transition() {
      return this.getAttribute("transition");
   }

   set transition(newValue) {
      this.setAttribute("transition", newValue);
      this._decomposeTransition(newValue);
   }

   _decomposeTransition(transition) {
      this._oldSource = transition[0];
      this._oldTarget = transition[1];
      this._newSource = transition[3];
      this._newTarget = transition[4];

      // defines source->destination mapping between the evaluated cell pair
      this._transMap = [
         (transition[3] == "_") ? 0
            : ((transition[3] == transition[0]) ? 1
               : ((transition[3] == transition[1] && transition[3] != transition[4])
                  ? 2 : 0)),
         (transition[4] == "_") ? 0
            : ((transition[4] == transition[0] && transition[4] != transition[3])
               ? 1 : ((transition[4] == transition[1]) ? 2 : 0))
      ];
      this._maintainSource = this._transMap.includes(1);
      this._maintainTarget = this._transMap.includes(2);
   }

   // <NOTE> repeats the _computeTransition verification for performance reasons
   _checkTransition(spaceState, row, col, nr, nc) {
      const expectedTarget = (spaceState.state[nr][nc] == null)
         ? "_" : spaceState.state[nr][nc].dcc.type;
      return (expectedTarget == this._oldTarget ||
          ((this._oldTarget == "?" || this._oldTarget == "!") && expectedTarget != "_"));
   }

   _computeTransition(spaceState, row, col, nr, nc) {
      let triggered = false;
      let state = spaceState.state;
      const expectedTarget = (state[nr][nc] == null)
         ? "_" : state[nr][nc].dcc.type;
      if (expectedTarget == this._oldTarget ||
          ((this._oldTarget == "?" || this._oldTarget == "!") && expectedTarget != "_")) {
         triggered = true;

         // computes the new value of the target
         const valueTarget = (!"?!@".includes(this._newTarget)) ? this._newTarget
            : ((this._newTarget == "@")
               ? spaceState.vtypes[Math.floor(Math.random() * spaceState.vtypes.length)]
               : ((this._oldSource == this._newTarget) ? 
                  state[row][col].dcc.type : expectedTarget));
         const valueSource = (!"?!@".includes(this._newSource)) ? this._newSource
            : ((this._newSource == "@")
               ? spaceState.vtypes[Math.floor(Math.random() * spaceState.vtypes.length)]
               : ((this._oldSource == this._newSource)
                  ? state[row][col].dcc.type : expectedTarget));

         if (!this._maintainSource && state[row][col] != null &&
             (nr != row || nc != col)){
            spaceState.cells.removeChild(state[row][col].element);
            state[row][col] = null;
         }
         if (!this._maintainTarget && state[nr][nc] != null) {
            spaceState.cells.removeChild(state[nr][nc].element);
            state[nr][nc] = null;
         }

         const newState = state[nr][nc];

         switch (this._transMap[1]) {
            case 0:
               if (valueTarget != "_") {
                  state[nr][nc] =
                     spaceState.cellTypes[valueTarget].createIndividual(nr+1, nc+1);
                  spaceState.cells.appendChild(state[nr][nc].element);
               } else
                  state[nr][nc] = null;
               spaceState.changed[nr][nc] = true;
               break;
            case 1:
               state[nr][nc] = state[row][col];
               spaceState.cellTypes[valueTarget].repositionElement(
                  state[row][col].element, nc+1 , nr+1);
               spaceState.changed[nr][nc] = true;
               break;
         }

         if (nr != row || nc != col)
            switch (this._transMap[0]) {
               case 0:
                  if (valueSource != "_") {
                     state[row][col] =
                        spaceState.cellTypes[valueSource].createIndividual(row+1, col+1);
                     spaceState.cells.appendChild(state[row][col].element);
                  } else
                     state[row][col] = null;
                  spaceState.changed[row][col] = true;
                  break;
               case 2:
                  state[row][col] = newState;
                  spaceState.cellTypes[valueSource].repositionElement(
                     state[row][col].element, col+1 , row+1);
                  spaceState.changed[row][col] = true;
                  break;
            }
      }
      return triggered;
   }
}