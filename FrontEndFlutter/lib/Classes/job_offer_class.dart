
class JobOffer {
    int _idJobOffer;
    String _title;
    String _description;
    int _postNumber;
    DateTime _date;


  //Constructeur
  JobOffer(this._idJobOffer, this._title, this._description, this._postNumber,this._date);

  // getters
  int get getidJobOffer => _idJobOffer;
  String get gettitle => _title.toString();
  String get getdescription => _description.toString();
  int get getPostNumber => _postNumber;
  DateTime get getDate => _date;
   
  // setters
  set setidJobOffer(int value) {
    _idJobOffer = value;
  }

  set settitle(String value) {
    _title = value;
  }

  set setdescription(String value) {
    _description = value;
  }

  set setPostNumber(int value) {
    _postNumber = value;
  }

 set setDate(DateTime value) {
    _date = value;
  }

}