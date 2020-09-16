from flask import Flask,redirect
app = Flask(__name__)

@app.route("/")
def hello():
    return redirect("https://data2doc.z19.web.core.windows.net/", code=302)
    #return "Hello3333 + +   eee + World!"

if __name__ == '__main__':
     app.run(port=5002)