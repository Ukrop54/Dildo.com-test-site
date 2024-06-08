from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/send_message', methods=['POST'])
def send_message():
    # Код для відправлення повідомлення у Telegram
    chat_id = '1352317933'
    message = 'Ваше_повідомлення'
    token = '6356129001:AAEJRsqBQi0IEiK2gybD8Sa9PIgLKVvJzFk'
    requests.post(f'https://api.telegram.org/bot{token}/sendMessage', data={'chat_id': chat_id, 'text': message})
    return 'Повідомлення відправлено'

if __name__ == '__main__':
    app.run(debug=True)