from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/double/{number}")
def read_item(number: int | None = None):
    return {"double": (number * 2)}
