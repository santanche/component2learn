from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

# Import the SentimentAnalysis class
from sentiment_analysis import SentimentAnalysis

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173","http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a global instance of SentimentAnalysis
classifier = SentimentAnalysis()

# Redirect root to /docs
@app.get("/")
async def redirect_to_docs():
    return RedirectResponse(url="/docs")

@app.get("/classify")
async def classify(text: str):
    try:
        result = classifier.classify(text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
