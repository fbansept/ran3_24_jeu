from flask import Flask, render_template

app = Flask(
   __name__,
   static_url_path='',
   static_folder='static',
   template_folder="templates")

articles = (("https://placehold.co/600x400?test=","Natation","Finale 400m 4 nages (H) | Natation | Jeux Olympiques de Paris 2024"),
            ("https://placehold.co/600x400","Judo","Resultat judo"),
            ("https://placehold.co/600x400","Triathlon","Resultat 2"))

@app.route("/")
def accueil():

   return render_template('accueil.html', articles=articles)