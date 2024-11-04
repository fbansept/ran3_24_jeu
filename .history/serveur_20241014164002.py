from flask import Flask

app = Flask(__name__)

articles = ("article 1", "article 2", "article 3")

@app.route("/")
def hello_world():

    

    return "<p>Hello, World!</p>"