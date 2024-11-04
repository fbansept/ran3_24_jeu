from flask import Flask, render_template

app = Flask(
   __name__,
   static_folder='static',
    template_folder="templates")

articles = ("article 1",
            "article 2", 
            "article 3")

@app.route("/")
def accueil():

   return render_template('accueil.html', articles=articles)