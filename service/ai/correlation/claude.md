# Conversas com Claude.ai - Componentization

## Solicitando um Serviço de Correlação

Given a file "intake-person-demo(age).csv" with the following file fields: age, gender, ethnicity, and fcid_code. Create a FastAPI service that has the following endpoint:

GET /correlation

This service receives the fcid_code of a food product. It returns the correlation between the age and intake_bw of the food product. The data to calculate the correlation comes from the csv file.