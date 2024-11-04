from flask import Flask

app = Flask(__name__)

articles = ("Article 1", "Article 1","Article 1"

@app.route("/")
def accueil():
   return "<h1>Hello</h1>"