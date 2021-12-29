import 'package:flutter/material.dart';
import 'package:front_end_flutter/TeamPages/master.dart';
import 'package:front_end_flutter/profil.dart';
import 'package:front_end_flutter/forms/addUser.dart';
import 'package:front_end_flutter/forms/listUser.dart';
import 'home.dart';
import 'package:front_end_flutter/login_page.dart';

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
          '/login': (BuildContext context) => const MyLoginPage(title: ""),
          '/teams': (BuildContext context) => Master(),
          '/profil': (BuildContext context) => const MyProfilPage(title: ""),
         '/addUser': (BuildContext context) => AddUser(),
         '/listUsers': (BuildContext context) => ListUsers(),
        },
    );
  }
}