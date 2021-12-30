import 'package:flutter/material.dart';

class QuestionModify extends StatelessWidget {
  final int idQuestion;
  bool get isEditing => idQuestion != null;
  QuestionModify({required this.idQuestion});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:
          AppBar(title: Text(isEditing ? 'Create Question' : 'Edit Question')),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: <Widget>[
            TextField(
              decoration: InputDecoration(hintText: 'Quetion ID '),
            ),
            Container(height: 8),
            TextField(
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
                  if (isEditing) {
                    //update question in api
                  } else {
                    //create question in api
                  }
                  Navigator.of(context).pop();
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
