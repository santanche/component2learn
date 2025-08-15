"""
This module provides functionality for training and evaluating a breast cancer predictor
using the Wisconsin dataset.
It loads the dataset, splits it into training and test sets, trains a CancerPredictor model,
and evaluates its performance
using precision, recall, and F1 score metrics. The module demonstrates usage of the
CancerPredictor class for making diagnosis predictions based on selected features: radius_mean,
texture_mean, symmetry_mean, and fractal_dimension_mean.

Usage:
    1. Loads breast-cancer-wisconsin.csv dataset.
    2. Splits data into training and test sets.
    3. Trains CancerPredictor on training data.
    4. Makes predictions on test data.
    5. Evaluates model performance.
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import precision_score, recall_score, f1_score

from cancer_predictor import CancerPredictor

# Create an instance of the predictor
predictor = CancerPredictor()

# Train the model
#################

# Load the data
data = pd.read_csv("breast-cancer-wisconsin.csv")

# Split the data into train and test sets
train_data, test_data = train_test_split(data, test_size=0.2, random_state=42)

# Save the train data to a temporary CSV file
train_data.to_csv("breast-cancer-wisconsin_train.csv", index=False)

# Train the model using the train data
predictor.train("breast-cancer-wisconsin_train.csv")

# Use the model
###############

# Loop through each row in the test data and make predictions
for index, row in test_data.iterrows():
    radius_mean = row['radius_mean']
    texture_mean = row['texture_mean']
    symmetry_mean = row['symmetry_mean']
    fractal_dimension_mean = row['fractal_dimension_mean']

    # Make the prediction
    predicted_diagnosis = predictor.predict(
        radius_mean, texture_mean, symmetry_mean, fractal_dimension_mean)

    # Print the result for each row
    print(f"For a person with radius_mean {radius_mean}, texture_mean {texture_mean}, " +
          f"symmetry_mean {symmetry_mean}, and fractal_dimension_mean {fractal_dimension_mean}:")

# Evaluate the model
####################

# Collect predictions and true labels
y_true = test_data['diagnosis'].apply(lambda x: 1 if x == 'M' else 0).tolist()
y_pred = test_data.apply(lambda row: 1 if predictor.predict(row['radius_mean'],
                         row['texture_mean'], row['symmetry_mean'],
                         row['fractal_dimension_mean']) == 'M' else 0, axis=1).tolist()

# Compute precision, recall, and F1 score
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print(f"Precision: {precision:.2f}")
print(f"Recall: {recall:.2f}")
print(f"F1 Score: {f1:.2f}")
