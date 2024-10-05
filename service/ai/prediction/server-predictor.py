from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Optional
import uvicorn

# Import the FoodPredictor class
from food_predictor import FoodPredictor

app = FastAPI()

# Create a global instance of FoodPredictor
predictor = FoodPredictor()

# Pydantic model for prediction input
class PredictionInput(BaseModel):
    age: int
    gender: int
    ethnicity: int

# Pydantic model for training input
class TrainingInput(BaseModel):
    file_path: str

# Global variable to store training status
training_status = "Not started"

def train_model(file_path: str):
    global training_status
    training_status = "In progress"
    try:
        predictor.train(file_path)
        training_status = "Completed"
    except Exception as e:
        training_status = f"Failed: {str(e)}"

@app.post("/train")
async def train(training_input: TrainingInput, background_tasks: BackgroundTasks):
    background_tasks.add_task(train_model, training_input.file_path)
    return {"message": "Training started in the background"}

@app.get("/training_status")
async def get_training_status():
    return {"status": training_status}

@app.get("/predict")
async def predict(age: int, gender: int, ethnicity: int):
    if training_status != "Completed":
        raise HTTPException(status_code=400, detail="Model not trained yet")
    try:
        fcid_code = predictor.predict(age, gender, ethnicity)
        return {"fcid_code": str(fcid_code)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)