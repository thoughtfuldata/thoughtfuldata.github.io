from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        age = request.form["age"]
        weight = request.form["weight"]
        print(age, weight)
        return redirect(url_for("index"))

    return render_template("index.html")
