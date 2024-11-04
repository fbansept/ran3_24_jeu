from flask import Flask

app = Flask(__name__)

articles = ("article 1", "article 2", "article 3")

@app.route("/")
def accueil():

   return render_template('auth/register.html')

    content = "<ul>"

    for article in articles :
        content += f"<li>{article}</li>"

    content += "</ul>"

    return content