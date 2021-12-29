import 'package:flutter/material.dart';

class MyEmployeesPage extends StatelessWidget {
  const MyEmployeesPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
        child: Text(
          "Employees",
          style: TextStyle(fontSize: 28),
        ),
       ),
      );

  }



 }
