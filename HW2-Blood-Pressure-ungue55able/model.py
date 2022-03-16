import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

base_folder = "HW2-Blood-Pressure-ungue55able/"


def train():
    df = pd.read_csv(base_folder + "SBP.csv")

    x = df[["Age", "Weight"]]
    y = df["SBP"]

    regr = LinearRegression()
    regr.fit(x, y)

    joblib.dump(regr, base_folder + "regr.pkl")


def load():
    clf = joblib.load(base_folder + "regr.pkl")
    age = 18
    weight = 60
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    print(prediction)


if __name__ == "__main__":
    train()
    load()
