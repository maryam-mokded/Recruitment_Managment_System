class Question {
  String id;
  String question;

  Question({
    required this.id,
    required this.question,
  });

  factory Question.fromJson(Map<String, dynamic> json) {
    return Question(
      id: json['id'],
      question: json['question'],
    );
  }
}
