class User {
  int _idUser;
  String _firstName;
  String _lastName;
  String _email;
  String _password;
  int _cin;
  int _phoneNumber;
  String _adress;
  String _photo;
  DateTime _hireDate;
  String _competences;

  User(
      this._idUser,
      this._firstName,
      this._lastName,
      this._email,
      this._password,
      this._cin,
      this._phoneNumber,
      this._adress,
      this._photo,
      this._hireDate,
      this._competences);

// Getters
  int get getidUser => _idUser;
  String get getfirstName => _firstName.toString();
  String get getlastName => _lastName.toString();
  String get getemail => _email.toString();
  String get getpassword => _password.toString();
  int get getcin => _cin;
  int get getphoneNumber => _phoneNumber;
  String get getadress => _adress.toString();
  String get getphoto => _photo.toString();
  DateTime get gethireDate => _hireDate;
  String get getcompetenses => _competences.toString();

// Setters

  set idUser(int value) {
    _idUser = value;
  }

  set firstName(String value) {
    _firstName = value;
  }

  set lastName(String value) {
    _lastName = value;
  }

  set email(String value) {
    _email = value;
  }

  set password(String value) {
    _password = value;
  }

  set cin(int value) {
    _cin = value;
  }

  set phoneNumber(int value) {
    _phoneNumber = value;
  }

  set adress(String value) {
    _adress = value;
  }

  set photo(String value) {
    _photo = value;
  }

  set hireDate(DateTime value) {
    _hireDate = value;
  }

  set competences(String value) {
    _competences = value;
  }
}
