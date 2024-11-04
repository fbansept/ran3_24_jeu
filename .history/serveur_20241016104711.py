from flask import Flask, render_template

app = Flask(
   __name__,
   static_url_path='',
   static_folder='static',
   template_folder="templates")

articles = (("https://placehold.co/600x400",),
            "article 2", 
            "article 3")

@app.route("/")
def accueil():

   return render_template('accueil.html', articles=articles)