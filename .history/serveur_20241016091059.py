from flask import Flask

app = Flask(__name__)

articles = ("Article 1", "Article 2","Article 3")

@app.route("/")
def accueil():

   content = "<ul>"

   for article in articles :
      content += f"<li>article"


   content = "</ul>"

   return content