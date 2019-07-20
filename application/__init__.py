#!/usr/bin/env python3
from flask import Flask, request, url_for, \
    render_template, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)


app.config['DEBUG'] = True
app.config['TESTING'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
#app.config['_MAIL_DEBUG'] = True
app.config['MAIL_USERNAME'] = '<your.email@yourmail.com>'
app.config['MAIL_PASSWORD'] = '<google app password or your regular password>'
app.config['MAIL_DEFAULT_SENDER'] = '<mail on default sender>'
app.config['MAIL_MAX_EMAILS'] = None
#app.config['MAIL_SURPRESS_SEND'] = False
app.config['MAIL_ASCII_ATTACHMENTS'] = False


mail = Mail(app)


# Another way of initiating the mail function
# mail = Mail()
# mail.init_app(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

# Contact Us form content sent to company
@app.route('/sendmail', methods=['GET', 'POST'])
def sendMail():
    try:
        namn = request.form['name']
        efternamn = request.form['surname']
        email = request.form['email']
        message = request.form['message']

        msg = Message(subject="Meddelande från kund! (Hemsidan)",
                      recipients=['<your.email@yourmail.com>'])
        msg.body = "OBS! Se upp för falska meddelanden! Klicka inga länkar!\n\n\n\
        Du har meddelande från en kund:\n\
        Namn: " + namn + ' ' + efternamn + "\n\
        Mail: " + email + "\n\n\
        Meddelande START:\n" + message + "\n\n\n\
        Från: Kontaktformuläret på hemsidan."
        if namn and efternamn and email and message:
            mail.send(msg)
            return jsonify({'message': 'Ditt meddelande har skickats!'})
    except:
        return jsonify({'error': 'ERROR: Uppdatera \
            sidan och försök igen. Funkar det inte så vänligen ring oss.'})
























# ========= GMAIL DEFAULT MAIL SETUP ========= #
"""
Default SMTP Settings for Gmail
As you set up an email client to synchronize with your Gmail account, a screen asks for your Gmail SMTP information. Use these settings:

Gmail SMTP server address: smtp.gmail.com
Gmail SMTP username: Your Gmail address (for example, example@gmail.com)
Gmail SMTP password: Your Gmail password
Gmail SMTP port (TLS): 587
Gmail SMTP port (SSL): 465
Gmail SMTP TLS/SSL required: Yes
"""