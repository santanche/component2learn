/**
 * 
 */

class DCCCommonServer {

   constructor() {
      this._local = false;

      this.userLogin = this.userLogin.bind(this);
      MessageBus.ext.subscribe("data/user/login", this.userLogin);
      this.casesList = this.casesList.bind(this);
      MessageBus.ext.subscribe("data/case/*/list", this.casesList);
      this.loadCase = this.loadCase.bind(this);
      MessageBus.ext.subscribe("data/case/+/get", this.loadCase);
      this.loadTheme = this.loadTheme.bind(this);
      this.themeFamilySettings = this.themeFamilySettings.bind(this);
      MessageBus.int.subscribe("data/theme_family/+/settings",
                               this.themeFamilySettings);
      MessageBus.ext.subscribe("data/theme/+/get", this.loadTheme);
      this.contextList = this.contextList.bind(this);
      MessageBus.int.subscribe("data/context/*/list", this.contextList);
      this.loadContext = this.loadContext.bind(this);
      MessageBus.int.subscribe("data/context/+/get", this.loadContext);
   }

   get token() {
      return this._token;
   }

   set token(newToken) {
      this._token = newToken;
   }

   get local() {
      return this._local;
   }

   set local(newValue) {
      this._local = newValue;
   }

   
   /*
    * Wrappers of the services
    * ************************
    */

   async userLogin(topic, message) {
      let header = {
         "async": true,
         "crossDomain": true,
         "method": "POST",
         "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({"email": message.email,
                                  "password": message.password})
      }

      console.log("=== login request");
      console.log(DCCCommonServer.managerAddressAPI + "user/login");
      console.log(header);

      const response = await fetch(
         DCCCommonServer.managerAddressAPI + "user/login", header);

      console.log("=== login response");
      console.log(response);

      const jsonResponse = await response.json();
      const busResponse = {
         userid: jsonResponse.id,
         token: jsonResponse.token
      };
      this._token = jsonResponse.token;
      MessageBus.ext.publish(MessageBus.buildResponseTopic(topic, message),
                             busResponse);
   }

   async casesList(topic, message) {
      let header = {
         "async": true,
         "crossDomain": true,
         "method": "GET",
         "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.token
          }
      };
      /*
      if (message.filterBy) {
         header.body = JSON.stringify({
            filterBy: message.filterBy,
            filter: message.filter
         });
      }
      const response = await fetch(
         DCCCommonServer.managerAddressAPI + "case/list", header);
      */
      const response = await fetch(
         DCCCommonServer.managerAddressAPI +
         ((message.user) ? "user/cases" : "cases"), header);
      console.log("=== cases list response");
      console.log(response);
      const jsonResponse = await response.json();
      let busResponse = [];
      for (let c in jsonResponse)
         busResponse.push({
            id:   jsonResponse[c].id,
            title: jsonResponse[c].title,
            icon: Basic.service.rootPath + "resources/icons/mono-slide.svg"
            // svg : jsonResponse[c].svg
         });
      busResponse.sort(function(c1, c2){
         return (c1.title < c2.title) ? -1 : 1});
      MessageBus.ext.publish(MessageBus.buildResponseTopic(topic, message),
                             busResponse);
   }
   
   async loadCase(topic, message) {
      let caseObj;
      if (this.local) {
         this._caseScript = document.createElement("script");
         this._caseScript.src = Basic.service.rootPath + "cases/current-case.js";
         document.head.appendChild(this._caseScript);
         // <TODO> adjust topic
         const caseM = await MessageBus.int.waitMessage("control/case/load/ready");
         caseObj = caseM.message;
      } else {
         const caseId = MessageBus.extractLevel(topic, 3);
         let header = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
               "Content-Type": "application/json",
               "Authorization": "Bearer " + this.token
             }
         };

         /*
         console.log("=== load case request");
         console.log(DCCCommonServer.managerAddressAPI + "case/" + caseId);
         console.log(header);
         */

         const response =
            await fetch(DCCCommonServer.managerAddressAPI + "case/" + caseId, header);

         /*
         console.log("=== load case response");
         console.log(response);
         */

         const jsonResponse = await response.json();

         /*
         console.log("=== load case json");
         console.log(jsonResponse);
         */

         caseObj = {title: jsonResponse.title,
                    source: jsonResponse.source};
      }

      MessageBus.ext.publish(MessageBus.buildResponseTopic(topic, message), caseObj);
   }

   async themeFamilySettings(topic, message) {
      let settings = {};
      if (!this.local) {
         const themeFamily = MessageBus.extractLevel(topic, 3);
         let header = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
               "Content-Type": "text/json",
             }
         };
         const response = await fetch(Basic.service.rootPath + "themes/" +
                                      themeFamily + "/theme.json", header);
         settings = await response.json();
      }
      MessageBus.int.publish(MessageBus.buildResponseTopic(topic, message),
                             settings);
   }

   async loadTheme(topic, message) {
      let themeObj;
      const themeCompleteName = MessageBus.extractLevel(topic, 3);
      const separator = themeCompleteName.indexOf("."); 
      const themeFamily = themeCompleteName.substring(0, separator);
      const themeName = themeCompleteName.substring(separator+1);
      let caseObj;
      if (this.local) {
         this._themeScript = document.createElement("script");
         this._themeScript.src = Basic.service.rootPath + "themes/" +
                                 themeFamily + "/local/" + themeName + ".js";
         document.head.appendChild(this._themeScript);
         // <TODO> adjust topic
         const themeM = await MessageBus.int.waitMessage("control/theme/" +
                                                         themeName +
                                                         "/load/ready");
         themeObj = themeM.message;
      } else {
         let header = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
               "Content-Type": "text/html",
             }
         }
         const response = await fetch(Basic.service.rootPath + "themes/" +
                                      themeFamily + "/" + themeName +
                                      ".html", header);
         themeObj = await response.text();
      }
      MessageBus.ext.publish(MessageBus.buildResponseTopic(topic, message),
                             themeObj);
   }

   async contextList(topic, message) {
      let header = {
         "async": true,
         "crossDomain": true,
         "method": "GET",
         "headers": {
            "Content-Type": "application/json",
          }
      };
      const response = await fetch(Basic.service.rootPath + "context/context.json",
                                   header);
      let ctxCatalog = await response.json();
      MessageBus.int.publish(MessageBus.buildResponseTopic(topic, message),
                             ctxCatalog);
   }

   async loadContext(topic, message) {
      let header = {
         "async": true,
         "crossDomain": true,
         "method": "GET",
         "headers": {
            "Content-Type": "text/json",
          }
      };
      const response = await fetch(Basic.service.rootPath + "context/" +
                                   message.body, header);
      let textResponse = await response.text();
      MessageBus.int.publish(MessageBus.buildResponseTopic(topic, message),
                             textResponse);
   }
}

(function() {
   DCCCommonServer.instance = new DCCCommonServer();
})();