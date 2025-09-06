from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os

# Import the FactoryPredictor class
from factory_predictor import FactoryPredictor

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173","http://localhost:5173","http://127.0.0.1:8000","http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a global instance of FactoryPredictor
predictor = FactoryPredictor()

# Global variable to store training status
training_status = "Not started"

# Redirect root to /docs
@app.get("/")
def root():
    return RedirectResponse(url="/editor/")

@app.get("/editor/")
def get_editor():
    return FileResponse(os.path.join("static", "editor", "index.html"))

def train_model():
    global training_status
    training_status = "In progress"
    try:
        predictor.train()
        training_status = "Completed"
    except Exception as e:
        training_status = f"Failed: {str(e)}"

@app.post("/train")
async def train(background_tasks: BackgroundTasks):
    background_tasks.add_task(train_model)
    return {"message": "Training started in the background"}

@app.get("/training_status")
async def get_training_status():
    return {"status": training_status}

@app.get("/predict")
async def predict(temperature: int, pressure: int):
    if training_status != "Completed":
        raise HTTPException(status_code=400, detail="Model not trained yet")
    try:
        predicted_diagnosis = predictor.predict(temperature, pressure)
        return {"diagnosis": str(predicted_diagnosis)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
    
@app.post("/inform_temperature")
async def inform_temperature(value: int):
    if training_status != "Completed":
        raise HTTPException(status_code=400, detail="Model not trained yet")
    try:
        predicted_diagnosis = predictor.inform_temperature(value)
        return str(predicted_diagnosis)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e

@app.post("/inform_pressure")
async def inform_pressure(value: int):
    if training_status != "Completed":
        raise HTTPException(status_code=400, detail="Model not trained yet")
    try:
        predicted_diagnosis = predictor.inform_pressure(value)
        return str(predicted_diagnosis)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
