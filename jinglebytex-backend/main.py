from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to JingleByteX API"}
