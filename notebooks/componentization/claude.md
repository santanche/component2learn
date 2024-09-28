# Conversas com Claude.ai - Componentization

## Passo 1 - Módulo / Pacote

Consider the following code:


```
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('intake-person-demo(potato-chips).csv')

plt.figure(figsize=(10, 6))
scatter = plt.scatter(df['age'], df['intake_bw'], c=df['intake_bw'], cmap='viridis')

plt.xlabel('age')
plt.ylabel('intake_bw')
plt.title('Age vs. Intake (body weight)')

plt.colorbar(scatter, label='intake_bw')

plt.show()
```

How can I reorganize this code in two functions (table and scatter_plot) and a main code that call them?
* table: receives the path as parameter and reads the CSV, returning the data
* scatter_plot: receives the data, xfield, yfield, and title, ploting the scatter plot
xfield and yfield are both the name of the field in the CSV and its label.

<hr>

### Answer

~~~python

import pandas as pd
import matplotlib.pyplot as plt

def table(path):
    """
    Read CSV file and return the data.
    
    :param path: str, path to the CSV file
    :return: pandas DataFrame
    """
    return pd.read_csv(path)

def scatter_plot(data, xfield, yfield, title):
    """
    Create a scatter plot from the given data.
    
    :param data: pandas DataFrame
    :param xfield: str, name of the x-axis field
    :param yfield: str, name of the y-axis field
    :param title: str, title of the plot
    """
    plt.figure(figsize=(10, 6))
    scatter = plt.scatter(data[xfield], data[yfield], c=data[yfield], cmap='viridis')
    
    plt.xlabel(xfield)
    plt.ylabel(yfield)
    plt.title(title)
    
    plt.colorbar(scatter, label=yfield)
    
    plt.show()

def main():
    # Path to the CSV file
    csv_path = 'intake-person-demo(potato-chips).csv'
    
    # Read the data
    df = table(csv_path)
    
    # Create the scatter plot
    scatter_plot(df, 'age', 'intake_bw', 'Age vs. Intake (body weight)')

if __name__ == "__main__":
    main()

~~~