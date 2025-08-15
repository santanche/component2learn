"""
This module provides the CancerPredictor class for training and predicting breast cancer diagnosis
using logistic regression. It leverages scikit-learn for model training, evaluation, and prediction,
and pandas for data manipulation. The predictor expects input features such as radius_mean,
texture_mean, symmetry_mean, and fractal_dimension_mean, and outputs a diagnosis prediction.

Classes:
    CancerPredictor: Handles training on a CSV dataset and making predictions
    based on input features.
"""
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

class CancerPredictor:
    """
    CancerPredictor is a class for training and making predictions on breast cancer diagnosis
    using logistic regression.
    """

    def __init__(self):
        self.model = LogisticRegression()
        self.le_diagnosis = LabelEncoder()

    def train(self, csv_train, csv_test):
        """
        Trains the logistic regression model using a CSV file containing breast cancer data.
        The CSV must include columns: 'radius_mean', 'texture_mean', 'symmetry_mean',
        'fractal_dimension_mean', and 'diagnosis'.
        Prints the model accuracy after training.
        """
        # Load the train data
        data_train = pd.read_csv(csv_train)

        # Encode categorical variables
        data_train['diagnosis'] = self.le_diagnosis.fit_transform(data_train['diagnosis'])

        # Split features and target
        X_train = data_train[
            ['radius_mean', 'texture_mean', 'symmetry_mean', 'fractal_dimension_mean']]
        y_train = data_train['diagnosis']

        # Train the model
        self.model.fit(X_train, y_train)

        # Load the test data
        data_test = pd.read_csv(csv_test)

        # Encode categorical variables
        data_test['diagnosis'] = self.le_diagnosis.fit_transform(data_test['diagnosis'])

        # Split features and target
        X_test = data_test[
            ['radius_mean', 'texture_mean', 'symmetry_mean', 'fractal_dimension_mean']]
        y_test = data_test['diagnosis']

        # Evaluate the model
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        print(f"Model accuracy: {accuracy:.2f}")

    def predict(self, radius_mean, texture_mean, symmetry_mean, fractal_dimension_mean):
        """
        Predicts the diagnosis ('M' for malignant or 'B' for benign) based on the provided
        feature values.
        Returns the predicted diagnosis as a string.
        """
        # Create a DataFrame with the same feature names as the training data
        input_data = pd.DataFrame(
            [[radius_mean, texture_mean, symmetry_mean, fractal_dimension_mean]],
            columns=['radius_mean', 'texture_mean', 'symmetry_mean', 'fractal_dimension_mean'])

        # Make prediction
        prediction = self.model.predict(input_data)

        # Decode prediction
        diagnosis = self.le_diagnosis.inverse_transform(prediction)[0]

        return diagnosis
