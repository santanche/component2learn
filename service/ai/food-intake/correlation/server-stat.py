import pandas as pd
from fastapi import FastAPI, HTTPException
from scipy import stats

# Load the CSV file
df = pd.read_csv("intake-person-demo(age).csv", dtype={'fcid_code': str})

app = FastAPI()

@app.get("/correlation")
async def get_correlation(fcid_code: str):
    # Filter the dataframe for the given fcid_code
    filtered_df = df[df['fcid_code'] == fcid_code]

    # Check if there's data for the given fcid_code
    if filtered_df.empty:
        raise HTTPException(status_code=404, detail="No data found for the given fcid_code")

    # Calculate the correlation between age and intake_bw
    correlation, p_value = stats.pearsonr(filtered_df['age'], filtered_df['intake_bw'])

    return {
        "fcid_code": fcid_code,
        "correlation": correlation,
        "p_value": p_value
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)