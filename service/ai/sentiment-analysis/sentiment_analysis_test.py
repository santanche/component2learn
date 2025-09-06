from sentiment_analysis import SentimentAnalysis

# Create an instance of the predictor
classifier = SentimentAnalysis()

# Classify a new sentence
sentence = "The dinosaur is very happy!"
result = classifier.classify(sentence)
print(result)
