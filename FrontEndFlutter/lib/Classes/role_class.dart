
// ignore_for_file: non_constant_identifier_names

class Role{
  int _idRole;
  String _RoleType;

  //Constructeur
  Role(this._idRole,this._RoleType);

  //Getters 
   int get getidRole => _idRole;
   String get getRoleType => _RoleType.toString();

  //Setters
   set setidRole(int value) {
    _idRole = value;
  }

  set setRoleType(String value) {
    _RoleType = value;
  }
}