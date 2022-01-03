import 'package:flutter/material.dart';
import 'package:front_end_flutter/Classes/question.dart';
import 'package:front_end_flutter/questionsList.dart';



class Detailstrans extends StatefulWidget {
  Detailstrans(this.transaction);

  final Question transaction;

  @override
  _DetailstransState createState() => _DetailstransState();
}

class _DetailstransState extends State<Detailstrans> {
  _DetailstransState();

  final QuestionsList api = QuestionsList(title: "aaa");

  @override
  Widget build(BuildContext context) {
    var title;
    return Scaffold(

      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.only(top:170.0,left:25,right:25),
          child: Card(
              child: Container(
                  padding: EdgeInsets.all(30.0),
                  width: 440,
                  child: Column(
                    children: <Widget>[
                      Container(
                        margin: EdgeInsets.fromLTRB(0, 0, 0, 10),
                        child: Column(
                          children: <Widget>[
                            Text('Question :', style: TextStyle(color: Colors.black.withOpacity(0.8))),
                            Text(widget.transaction.question, style: Theme.of(context).textTheme.headline6)
                          ],
                        ),
                      ),

                      Container(
                        margin: EdgeInsets.fromLTRB(0, 0, 0, 10),
                        child: Column(
                          children: <Widget>[
                          ],
                        ),
                      ),
                    ],
                  )
              )
          ),
        ),
      ),
    );
  }

  /*_navigateToEditScreen (BuildContext context, QuestionsList transaction) async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => Edittrans(transaction)),
    );
  }*/

  /*Future<void> _confirmDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Warning!'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('Are you sure want delete this item?'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Yes'),
              onPressed: () {
                api.deleteCase(widget.transaction.id);
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) =>
                            Affichetrans(title: 'trans',)));
              },
            ),
            FlatButton(
              child: const Text('No'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }*/

}