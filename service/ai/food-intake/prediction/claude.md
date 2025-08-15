# Conversas com Claude.ai - Componentization

## Passo 2 - Transformando Workflow em Componente

Given a . Create a python class to execute logistic regression predictions with two operations:

* train: Receives the csv file path file with the following file fields: age, gender, ethnicity, and fcid_code. Trains a logistic regression model to predict the fcid_code given age, gender, and ethnicity.
* predict: Receives three parameters (age, gender, and ethnicity) and predicts the fcid_code with the logistic regression model.

### Exemplo de uso

Can you give me a example of code using this class to do predictions with the following parameters:
* train: file path = "intake-person-demo(beans).csv"
* predict: age=31; gender=1; ethnicity=2

## Passo 3 - Componente para Serviço

Can you transform this code into a FastAPI service with two endpoints:
* POST /train
* GET /predict
