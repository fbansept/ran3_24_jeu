from flask import Flask

app = Flask(
   __name__,
    template_folder="templates")


@app.route("/")
def accueil():
   return "<h1>"