class Question {
  int id;
  String question;

  Question({
    required this.id,
    required this.question,
  });



  factory Question.fromJson(Map<String, dynamic> json) {
    return Question(
      id: json['id_Question'],
      question: json['question'],
    );
  }
}
