from flask import Flask

app = Flask(__name__)

@app.route("/")
def accueil():
   return "<h1>Hello</h1>"