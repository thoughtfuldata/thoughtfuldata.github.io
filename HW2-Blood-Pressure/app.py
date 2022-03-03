from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    # if request == "POST":
    #     age = request.form["age"]
    #     weight = request.form["weight"]

    #     print(age, weight)
    return render_template("index.html")
