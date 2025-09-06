from transformers import pipeline

class SentimentAnalysis:
    def __init__(self):
        # Initialize the sentiment analysis pipeline
        self.pipe = pipeline("text-classification", model="tabularisai/multilingual-sentiment-analysis")

    def classify(self, text: str):
        # Use the pipeline to classify the input text
        result_set = self.pipe(text)
        result = result_set[0]
        analysis = result["label"].lower()
        result["value"] = "positive" if "positive" in analysis \
            else "negative" if "negative" in analysis \
            else "neutral"
        return result
