import 'package:flutter/material.dart';
import 'package:front_end_flutter/DetailsQuestion.dart';
import 'package:front_end_flutter/question_modify.dart';
import 'Classes/question.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:http/http.dart';

class QuestionsList extends StatefulWidget {
  const QuestionsList({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<QuestionsList> createState() => _QuestionsListState();
}

class _QuestionsListState extends State<QuestionsList> {
  final String apiUrl = 'https://test-deploiment.herokuapp.com/Questions';
  List<dynamic> _questions = [];
  bool loading = true;

  @override
  void initState() {
    getQuestions();
    super.initState();
  }

  Future<void> getQuestions() async {
    var response = await http.get(Uri.parse(apiUrl));
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



  Future<Question> getCaseById(int id) async {
    final response = await http.get(Uri.parse('$apiUrl/$id'));
    if (response.statusCode == 200) {
      return Question.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load a case');
    }
  }

  Future<void> deleteCase(String id) async {
    Response res = await http.delete(Uri.parse('$apiUrl/$id'));

    if (res.statusCode == 200) {
      print("Case deleted");
    } else {
      throw "Failed to delete a case.";
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
    return
      ListView.builder(
          itemCount: _questions == null ? 0 : _questions.length,
          itemBuilder: (BuildContext context, int index) {
            return
              Padding(
                padding: const EdgeInsets.all(18.0),
                child: Column(
                  children: [
                    Card(
                        child: InkWell(
                          onTap: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => Detailstrans(_questions[index])),
                            );
                          },
                          child: ListTile(
                            leading: Icon(Icons.info),
                            title: Text(_questions[index].question),

                          ),
                        )
                    ),
                  ],
                ),
              );
          });
  }

}