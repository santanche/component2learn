# Sentiment Analysis Server

Inside the root folder `sentiment-analysis`:

## Setting up the Environment

These are the steps to set the environment for the first time.

### Creating a Virtual Environment for Django

~~~
python3 -m venv .venv
~~~

### Running a Virtual Environment for Django

~~~
source .venv/bin/activate
~~~

### Requirements Setup

~~~
pip install -r requirements.txt
~~~

## Running the FastAPI Server

~~~
fastapi dev server_sentiment_analysis.py
~~~