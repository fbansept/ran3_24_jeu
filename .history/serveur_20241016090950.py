from flask import Flask

app = Flask(__name__)

articles = ("Article 1", "Article 2","Article 3")

@app.route("/")
def accueil():

   
   return "<h1>Hello</h1>"