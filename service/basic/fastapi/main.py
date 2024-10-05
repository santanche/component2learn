from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello_world():
    return {"Hello": "World"}

@app.get("/double/{number}")
def double(number: int | None = None):
    return {"double": (number * 2)}
