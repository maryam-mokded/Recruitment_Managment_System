import 'package:flutter/material.dart';
import 'package:front_end_flutter/Geolocalisation.dart';
import 'package:front_end_flutter/TeamPages/master.dart';
import 'package:front_end_flutter/admin_dashboard_page.dart';
import 'package:front_end_flutter/offers.dart';
import 'package:front_end_flutter/profil.dart';
import 'package:front_end_flutter/forms/addUser.dart';
import 'package:front_end_flutter/forms/listUser.dart';
import 'package:front_end_flutter/home.dart';
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


      home: const MyHomePage(title: "",),
       routes: {
          '/home': (BuildContext context) => const MyHomePage(title: "",),
          '/login': (BuildContext context) => MyLoginPageApp(),
          '/teams': (BuildContext context) => Master(),
          '/profil': (BuildContext context) => const ProfilPage(name: ''),
         '/addUser': (BuildContext context) => AddUser(),
         '/listUsers': (BuildContext context) => ListUsers(),
          '/offer': (BuildContext context) => const MyOfferPageApp(),
         '/dasboard': (BuildContext context) => MyApp(),
        },

    );
  }
}
