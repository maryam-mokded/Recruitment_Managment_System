class Cv {
  int _idCv;
  String _cv;

  Cv(this._idCv, this._cv);

  // getters
  int get getidCv => _idCv;
  String get getcv => _cv;

  // setters
  set idCv(int value) {
    _idCv = value;
  }

  set cv(String value) {
    _cv = value;
  }
}
