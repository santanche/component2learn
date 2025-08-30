import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

class FactoryPredictor:
    def __init__(self):
        self.model = LogisticRegression()
        self.le_diagnosis = LabelEncoder()
        self.temperature = 0
        self.pressure = 0

    def train(self, csv_train='train.csv', csv_test='test.csv'):
        # Load the train data
        data_train = pd.read_csv(csv_train)

        # Encode categorical variables
        data_train['diagnosis'] = self.le_diagnosis.fit_transform(data_train['diagnosis'])

        # Split features and target
        X_train = data_train[
            ['temperature', 'pressure']]
        y_train = data_train['diagnosis']

        # Train the model
        self.model.fit(X_train, y_train)

        # Load the test data
        data_test = pd.read_csv(csv_test)

        # Encode categorical variables
        data_test['diagnosis'] = self.le_diagnosis.fit_transform(data_test['diagnosis'])

        # Split features and target
        X_test = data_test[
            ['temperature', 'pressure']]
        y_test = data_test['diagnosis']

        # Evaluate the model
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        print(f"Model accuracy: {accuracy:.2f}")

    def inform_temperature(self, temperature):
        self.temperature = temperature
        if self.pressure > 0:
            return self.predict(self.temperature, self.pressure)
        return 'N'

    def inform_pressure(self, pressure):
        self.pressure = pressure
        if self.temperature > 0:
            return self.predict(self.temperature, self.pressure)
        return 'N'

    def predict(self, temperature, pressure):
        # Create a DataFrame with the same feature names as the training data
        input_data = pd.DataFrame(
            [[temperature, pressure]],
            columns=['temperature', 'pressure'])

        # Make prediction
        prediction = self.model.predict(input_data)

        # Decode prediction
        diagnosis = self.le_diagnosis.inverse_transform(prediction)[0]

        return diagnosis
