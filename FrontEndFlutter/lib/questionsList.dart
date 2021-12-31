import 'package:flutter/material.dart';
import 'package:front_end_flutter/question_modify.dart';
import 'Classes/question_class.dart';
import 'package:http/http.dart' as http;

class QuestionsList extends StatelessWidget {
  const QuestionsList({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(title: Text('Questions List ')),
      backgroundColor: Colors.white,
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => QuestionModify(idQuestion: 1)));
        },
        child: Icon(Icons.add),
      ),
      body: ListView.separated(
        separatorBuilder: (_, __) => Divider(height: 1, color: Colors.green),
        itemBuilder: (context, index) {
          return Dismissible(
            key: ValueKey(QuestionsList),
            background: Container(
              child: const Icon(Icons.delete, size: 40, color: Colors.white),
              color: Colors.cyan,
            ),
            direction: DismissDirection.startToEnd,
            onDismissed: (direction) {
              setState(() {
                QuestionsList.removeAt(index);
              });
            },
            child: ListTile(
              title: Text(
                'Question',
                style: TextStyle(color: Theme.of(context).primaryColor),
              ),
              subtitle: Text('what is your point of weaknesses ? '),
              onTap: () {
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => QuestionModify(idQuestion: 1)));
              },
            ),
          );
        },
        itemCount: 30,
      ),
    );
  }

  void setState(Null Function() param0) {}

  static void removeAt(int index) {}
}
