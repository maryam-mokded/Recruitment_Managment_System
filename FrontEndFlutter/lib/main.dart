import 'package:flutter/material.dart';
import 'home.dart';

void main()  {
  runApp(const RecrutmentManagmentSystem());
}

class RecrutmentManagmentSystem extends StatelessWidget {
  const RecrutmentManagmentSystem({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'RMS',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'My Home Page'),
       routes: {
          '/home': (BuildContext context) => const MyHomePage(title: "home"),
        },
    );
  }
}