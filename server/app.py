from utils.winkel_scraper import winkels
import flask

app = flask.Flask(__name__)

winkel_list = {
    "ah": winkels.ah,
    "dirk": winkels.dirk,
    "jumbo": winkels.jumbo,
    "plus": winkels.plus,
    "lidl": winkels.lidl,
    "spar": winkels.spar
}


@app.route('/', methods=['GET'])
def home():
    return "This is the frikandel broodje api"


@app.route('/winkel/<winkel_name>')
def winkel(winkel_name):
    if winkel_name in winkel_list:
        winkel_class = winkel_list[winkel_name]()

        return flask.jsonify(winkel=winkel_name,
                             prijs=winkel_class.prijs,
                             gram=winkel_class.gram)
    else:
        flask.abort(404, description="WinkelCard niet gevonden")


@app.route('/winkels')
def winkels():
    winkel_json = []
    for winkel, winkel_class in winkel_list.items():
        winkel_class = winkel_class()
        winkel_json.append({
            "winkel": winkel,
            "gram": winkel_class.gram,
            "prijs": winkel_class.prijs,
            "bonus": winkel_class.bonus if hasattr(winkel_class, 'bonus') else False
        })
    return {
        "status": 200,
        "winkels": winkel_json
    }


@app.route('/bonus')
def bonus():
    bonus_json = []
    for winkel, winkel_class in winkel_list.items():
        try:
            winkel_class = winkel_class()
            if winkel_class.bonus:
                bonus_json.append({
                    "winkel": winkel,
                    "bonus": winkel_class.bonus,
                    "prijs": winkel_class.prijs
                })
        except AttributeError:
            continue

    return {
        "status": 200,
        "bonus": bonus_json
    }


app.run(host='0.0.0.0', debug=False)
