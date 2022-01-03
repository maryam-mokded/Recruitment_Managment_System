import 'package:flutter/material.dart';
import 'package:front_end_flutter/Classes/question.dart';
import 'package:front_end_flutter/admin_dashboard_page.dart';
import 'package:front_end_flutter/admin_page.dart';
import 'package:front_end_flutter/questionsList.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:http/http.dart';
import 'package:flutter/material.dart';
import 'package:front_end_flutter/DetailsQuestion.dart';
import 'package:front_end_flutter/question_modify.dart';
import 'Classes/question.dart';
import 'dart:convert';
import 'package:http/http.dart';


class QuestionModify extends StatelessWidget {
  final _questionController = TextEditingController();
  final  _idquestionController= TextEditingController();
  int i=50;
  final String apiUrl = 'https://test-deploiment.herokuapp.com/Questions';
  Future<Question> createCase(Question transaction) async {
    Map data = {
      'id_Question': transaction.id,
      'question':transaction.question,
    };

     Response  response =  await http.post(Uri.parse(
      '$apiUrl'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    if (response.statusCode == 200) {
      return Question.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to post Question !!');
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: _idquestionController,
              decoration: InputDecoration(hintText: 'Quetion ID '),
            ),
            Container(height: 8),
            TextField(
              controller: _questionController,
              decoration: InputDecoration(hintText: 'Question Content'),
            ),
            Container(height: 8),
            SizedBox(
              width: double.infinity,
              height: 35,
              child: RaisedButton(
                child: Text('Submit', style: TextStyle(color: Colors.white)),
                color: Theme.of(context).primaryColor,
                onPressed: () {
                  print(_idquestionController.text);
                 print(_questionController.text);
                 //Question q=new ;
                 createCase(Question(id:i,question:_questionController.text));
                 i++;
                  var route = new MaterialPageRoute(
                    builder : (BuildContext context) =>
                    new MyDashboardPage(value:""),

                  );
                  Navigator.of(context).push(route);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
