import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

void main() {
  runApp(const MyProfilApp());
}

class MyProfilApp extends StatelessWidget {
  const MyProfilApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const ProfilPage(title: 'Profil Page'),
    );
  }
}

class ProfilPage extends StatefulWidget {
  const ProfilPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<ProfilPage> createState() => _MyProfilPage();
}

class _MyProfilPage extends State<ProfilPage> {
  final double coverHight = 280;
  final double profilHeigh = 144;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
      padding: EdgeInsets.zero,
      children: <Widget>[
        buildTop(),
        buildContent(),
      ],
    ));
  }

  Widget buildContent() {
    return Column(
      children: [
        const SizedBox(height: 8),
        const Text('Maryam Mokded',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
        const SizedBox(
          height: 8,
        ),
        const Text(
          'Flutter Software Engineer',
          style: TextStyle(fontSize: 15, color: Colors.grey),
        ),
        const SizedBox(
          height: 16,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            buildSocialICon(FontAwesomeIcons.slack),
            const SizedBox(
              width: 12,
            ),
            buildSocialICon(FontAwesomeIcons.github),
            const SizedBox(
              width: 12,
            ),
            buildSocialICon(FontAwesomeIcons.twitter),
            const SizedBox(
              width: 12,
            ),
            buildSocialICon(FontAwesomeIcons.linkedin),
            const SizedBox(
              width: 12,
            ),
          ],
        ),
        const SizedBox(
          height: 16,
        ),
        Divider(),
        const SizedBox(
          height: 16,
        ),
        buildAbout(),
        const SizedBox(
          height: 32,
        ),
      ],
    );
  }

  Widget buildSocialICon(IconData icon) {
    return CircleAvatar(
      radius: 25,
      child: Center(
        child: Icon(
          icon,
          size: 32,
        ),
      ),
    );
  }

  Widget buildAbout() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "About",
            style: TextStyle(fontSize: 23, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 16),
          Text(
            "Flutter Software Engineer and google Developper Expert for Flutter & Dart with  years of experience  as a consultant  for multiple compaines  in Europe ,USA and Asia  ",
            style: TextStyle(fontSize: 14, height: 1.4),
          ),
          Text(
            "My mission is to  create better world  with beautiful Flutter App designs and software !",
            style: TextStyle(fontSize: 14, height: 1.4),
          ),
        ],
      ),
    );
  }

  Widget buildTop() {
    final bottom = profilHeigh / 2;
    final top = coverHight - profilHeigh / 2;
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.center,
      children: [
        Container(
          margin: EdgeInsets.only(bottom: bottom),
          child: buildCoverImage(),
        ),
        Positioned(
          top: top,
          child: buildProfilPicture(),
        ),
      ],
    );
  }

  Widget buildProfilPicture() {
    return CircleAvatar(
      radius: profilHeigh / 2,
      backgroundColor: Colors.grey.shade800,
      backgroundImage: const NetworkImage(
          'https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'),
    );
  }

  Widget buildCoverImage() {
    return Container(
      color: Colors.grey,
      child: Image.asset(
        'images/cover.jpg',
        width: double.infinity,
        height: coverHight,
        fit: BoxFit.cover,
      ),
    );
  }
}
