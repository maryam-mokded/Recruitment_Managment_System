import 'package:flutter/material.dart';

class MyMailBoxPage extends StatelessWidget {
  const MyMailBoxPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
        child: Text(
          "Mail Box",
          style: TextStyle(fontSize: 28),
        ),
       ),
      );

  }



 }
