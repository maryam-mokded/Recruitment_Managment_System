class UserRole {
  int _idUserRole;
  int _idUser;
  int _idRole;

  UserRole(
    this._idUserRole,
    this._idUser,
    this._idRole,
  );
// Getters
  int get getidUserRole => _idUserRole;
  int get getidUser => _idUser;
  int get getidRole => _idRole;

// Setters

  set idUserRole(int value) {
    _idUserRole = value;
  }

  set idUser(int value) {
    _idUser = value;
  }

  set idRole(int value) {
    _idRole = value;
  }
}
