from flask import Flask, render_template, url_for
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)
app.config['FREEZER_DESTINATION'] = 'output'
app.config['FREEZER_RELATIVE_URLS'] = True

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "freeze":
        freezer.freeze()
    else:
        app.run(debug=True)

@freezer.register_generator
def static():
    yield '/static/images/'
