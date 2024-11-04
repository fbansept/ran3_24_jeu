from flask import Flask

app = Flask(__name__)

articles = ("article 1", "article 2", "article 3")

@app.route("/")
def accueil():

    {% for message in get_flashed_messages() %}
        <div class="flash">{{ message }}</div>
    {% endfor %}

    content = "<ul>"

    for article in articles :
        content += f"<li>{article}</li>"

    content += "</ul>"

    return content