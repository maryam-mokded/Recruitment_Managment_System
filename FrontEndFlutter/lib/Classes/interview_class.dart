class Interview {
  int _date;
  int _heure;
  String _location;
  int _type;

  Interview(this._date, this._heure, this._location, this._type);

  // getters
  int get getdate => _date;
  int get getheure => _heure;
  String get getlocation => _location;
  int get gettype => _type;

  // setters
  set date(int value) {
    _date = value;
  }

  set heure(int value) {
    _heure = value;
  }

  set location(String value) {
    _location = value;
  }

  set type(int value) {
    _type = value;
  }
}
