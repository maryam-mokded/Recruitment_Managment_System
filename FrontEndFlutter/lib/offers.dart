import 'package:flutter/material.dart';

class MyOffersPage extends StatelessWidget {
  const MyOffersPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
        child: Text(
          "Offers",
          style: TextStyle(fontSize: 28),
        ),
       ),
      );

  }



 }
