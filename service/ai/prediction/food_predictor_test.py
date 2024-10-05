# Import the FoodPredictor class
from food_predictor import FoodPredictor

# Create an instance of the predictor
predictor = FoodPredictor()

# Train the model
# Note: Make sure the file "intake-person-demo(beans).csv" is in the correct directory
predictor.train("intake-person-demo(beans).csv")

# Now, let's make a prediction with the given parameters
age = 31
gender = 1  # Assuming 1 represents a specific gender in your encoding
ethnicity = 2  # Assuming 2 represents a specific ethnicity in your encoding

# Make the prediction
predicted_fcid = predictor.predict(age, gender, ethnicity)

# Print the result
print(f"For a person with age {age}, gender code {gender}, and ethnicity code {ethnicity}:")
print(f"The predicted FCID code is: {predicted_fcid}")