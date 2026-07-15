from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("NEWS_API_KEY")


@app.get("/news")
def get_news(
    category: str = "general",
    country: str = "us",
    page: int = 1,
    pageSize: int = 10,
):
    url = (
        f"https://newsapi.org/v2/top-headlines?"
        f"country={country}"
        f"&category={category}"
        f"&apiKey={API_KEY}"
        f"&page={page}"
        f"&pageSize={pageSize}"
    )

    response = requests.get(url)

    return response.json()