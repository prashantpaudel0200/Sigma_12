from flask import Flask, request, send_file
app = Flask(__name__)  
@app.route("/")
def home():
    return send_file("form1.html")  
@app.route("/submit", methods=["POST"])
def submit():

    firstname = request.form.get("firstname")
    lastname = request.form.get("lastname")
    email = request.form.get("email")
    username = request.form.get("username")
    age = request.form.get("age")
    dob = request.form.get("dob")

    with open("info.txt", "a") as file:
        file.write(f"{firstname}, {lastname}, {email}, {username}, {age}, {dob}\n")

    return "Data saved successfully!"

if __name__ == "__main__":
    app.run(debug=True)