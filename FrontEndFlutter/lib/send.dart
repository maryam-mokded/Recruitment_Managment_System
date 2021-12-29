import 'package:flutter/material.dart';

class MyScheduleSendPage extends StatelessWidget {
  const MyScheduleSendPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
        child: Text(
          "Schedule Send",
          style: TextStyle(fontSize: 28),
        ),
       ),
      );

  }



 }
