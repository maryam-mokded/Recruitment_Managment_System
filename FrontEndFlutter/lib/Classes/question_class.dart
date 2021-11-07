class Question {
  int _idQuestion;
  String _question;

  Question(
    this._idQuestion,
    this._question,
  );
// Getters
  int get getidQuestion => _idQuestion;
  String get getquestion => _question.toString();

// Setters

  set idQuestion(int value) {
    _idQuestion = value;
  }

  set question(String value) {
    _question = value;
  }
}
