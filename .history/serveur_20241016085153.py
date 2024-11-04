from flask import Flask, render_template

app = Flask(
   __name__,
    template_folder="templates")

articles = ("article 1",
            "article 2", 
            "article 3")

@app.route("/")
def accueil():

   return 