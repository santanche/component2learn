"""
This module provides a FastAPI-based web server for breast cancer prediction and model training.
It exposes endpoints for training a cancer prediction model asynchronously,
checking training status, and making predictions based on input features.

Endpoints:
- POST /train: Starts model training in the background using a provided data file.
- GET /training_status: Returns the current status of the model training process.
- GET /predict: Predicts cancer diagnosis based on input features
                (radius_mean, texture_mean, symmetry_mean, fractal_dimension_mean).

Dependencies:
- FastAPI for API creation
- Pydantic for request validation
- uvicorn for running the server
- CancerPredictor class for model operations (imported from cancer_predictor.py)

Usage:
Run this module to start the API server. Use the endpoints to train the model and make predictions.
"""

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Import the CancerPredictor class
from cancer_predictor import CancerPredictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a global instance of CancerPredictor
predictor = CancerPredictor()

# Global variable to store training status
training_status = "Not started"

# Redirect root to /docs
@app.get("/")
async def redirect_to_docs():
    return RedirectResponse(url="/docs")

def train_model(train_path: str, test_path: str):
    global training_status
    training_status = "In progress"
    try:
        predictor.train(train_path, test_path)
        training_status = "Completed"
    except Exception as e:
        training_status = f"Failed: {str(e)}"

@app.post("/train")
async def train(train_path: str, test_path: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(train_model, train_path, test_path)
    return {"message": "Training started in the background"}

@app.get("/training_status")
async def get_training_status():
    return {"status": training_status}

@app.get("/predict")
async def predict(radius_mean: float, texture_mean: float, symmetry_mean: float, fractal_dimension_mean: float):
    if training_status != "Completed":
        raise HTTPException(status_code=400, detail="Model not trained yet")
    try:
        predicted_diagnosis = predictor.predict(
            radius_mean, texture_mean, symmetry_mean, fractal_dimension_mean)
        return {"diagnosis": str(predicted_diagnosis)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
