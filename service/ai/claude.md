Given a file "intake-person-demo(age).csv" with the following file fields: age, gender, ethnicity, and fcid_code. Create a FastAPI service that has the following endpoint:

GET /correlation

This service receives the fcid_code of a food product. It returns the correlation between the age and intake_bw of the food product. The data to calculate the correlation comes from the csv file.

-----

Given a . Create a python class to execute logistic regression predictions with two operations:

* train: Receives the csv file path file with the following file fields: age, gender, ethnicity, and fcid_code. Trains a logistic regression model to predict the fcid_code given age, gender, and ethnicity.
* predict: Receives three parameters (age, gender, and ethnicity) and predicts the fcid_code with the logistic regression model.

-----

Can you give me a example of code using this class to do predictions with the following parameters:
* train: file path = "intake-person-demo(beans).csv"
* predict: age=31; gender=1; ethnicity=2

-----

Can you transform this code into a FastAPI service with two endpoints:
* POST /train
* GET /predict