import 'package:flutter/material.dart';

class AdminPage extends StatelessWidget {
  const AdminPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      //child: Center(child: Text('welcome to Admin Page')),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Padding(padding: EdgeInsets.all(20.0)),
           Text(
          "Dashboard Admin",
          style: TextStyle(fontSize: 28),
         ),
          ],
        ),
      ),
    );
  }
}
