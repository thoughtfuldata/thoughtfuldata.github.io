from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        age = request.form["age"]
        weight = request.form["weight"]

        pkl_clf = joblib.load("HW2-Blood-Pressure/regr.pkl")
        df = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])

        pred = pkl_clf.predict(df)[0]
        return render_template("index.html", data=pred)

    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
