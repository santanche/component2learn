import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

class FoodPredictor:
    def __init__(self):
        self.model = LogisticRegression()
        self.le_gender = LabelEncoder()
        self.le_ethnicity = LabelEncoder()
        self.le_fcid = LabelEncoder()

    def train(self, csv_file_path):
        # Load the data
        data = pd.read_csv(csv_file_path)

        # Encode categorical variables
        data['gender'] = self.le_gender.fit_transform(data['gender'])
        data['ethnicity'] = self.le_ethnicity.fit_transform(data['ethnicity'])
        data['fcid_code'] = self.le_fcid.fit_transform(data['fcid_code'])

        # Split features and target
        X = data[['age', 'gender', 'ethnicity']]
        y = data['fcid_code']

        # Split data into train and test sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the model
        self.model.fit(X_train, y_train)

        # Evaluate the model
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        print(f"Model accuracy: {accuracy:.2f}")

    def predict(self, age, gender, ethnicity):
        # Encode input data
        gender_encoded = self.le_gender.transform([gender])[0]
        ethnicity_encoded = self.le_ethnicity.transform([ethnicity])[0]

        # Make prediction
        prediction = self.model.predict([[age, gender_encoded, ethnicity_encoded]])

        # Decode prediction
        fcid_code = self.le_fcid.inverse_transform(prediction)[0]

        return fcid_code