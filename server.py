from flask import Flask, request, abort


app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        data = request.json
        message_content = data["content"]
        print(message_content)
        return 'success', 200
    else:
        abort(400)




if __name__ == '__main__':
    app.run()