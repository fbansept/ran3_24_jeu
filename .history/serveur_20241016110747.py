from flask import Flask, render_template

class Article :
   def __init__(self, url_image, label, texte):
      self.url_image = url_image
      self.label = label
      self.url_image = url_image

app = Flask(
   __name__,
   static_url_path='',
   static_folder='static',
   template_folder="templates")

articles = (("https://placehold.co/600x400?text=natation","Natation","Finale 400m 4 nages (H) | Natation | Jeux Olympiques de Paris 2024"),
            ("https://placehold.co/600x400?text=judo","Judo","Resultat judo"),
            ("https://placehold.co/600x400?text=triathlon","Triathlon","Resultat 2"),
            ("https://placehold.co/600x400?text=patinage","patinage","uj uj hui hu hi hni h lih l hil hl ih"))

@app.route("/")
def accueil():

   return render_template('accueil.html', articles=articles)