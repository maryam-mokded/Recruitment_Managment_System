import 'package:flutter/material.dart';
import 'package:front_end_flutter/question_modify.dart';
import 'Classes/question.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class QuestionsList extends StatefulWidget {
  const QuestionsList({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<QuestionsList> createState() => _QuestionsListState();
}

class _QuestionsListState extends State<QuestionsList> {
  final String url = 'https://test-deploiment.herokuapp.com/Questions';
  List<dynamic> _questions = [];
  bool loading = true;

  @override
  void initState() {
    getQuestions();
    super.initState();
  }

  Future<void> getQuestions() async {
    var response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final parsedData = jsonDecode(response.body).cast<Map<String, dynamic>>();
      _questions =
          parsedData.map<Question>((json) => Question.fromJson(json)).toList();
      setState(() {
        loading = !loading;
      });
    } else {
      throw Exception('Failed to load questions');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.of(context).push(MaterialPageRoute(
                builder: (_) => QuestionModify(idQuestion: 1)));
          },
          child: Icon(Icons.add),
        ),
        body: loading ? waitingScreen() : questionsList());
  }

  Widget waitingScreen() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: const <Widget>[
          Text("Loading data ..."),
          Padding(padding: EdgeInsets.only(bottom: 25)),
          CircularProgressIndicator()
        ],
      ),
    );
  }

  Widget questionsList() {
    return GridView.builder(
        gridDelegate:
            const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 1),
        itemCount: _questions.length,
        itemBuilder: (context, index) {
          Question question = _questions[index];
          return Card(
            color: Colors.white,
            child: Container(
               child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text(
                    question.question,
                    style: const TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 20),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
          );
        });
  }
}
