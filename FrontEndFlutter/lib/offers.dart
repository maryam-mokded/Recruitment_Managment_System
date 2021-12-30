import 'package:flutter/material.dart';

class MyOfferPageApp extends StatelessWidget {
  const MyOfferPageApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyOfferPage(title: 'Form choices examples'),
    );
  }
}

class MyOfferPage extends StatefulWidget {
  const MyOfferPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyOfferPage> createState() => _MyOfferPageState();
}

class _MyOfferPageState extends State<MyOfferPage> {

  bool value =false;
  final String _Titre = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
            child: Container(
      padding: EdgeInsets.symmetric(horizontal: 20.0),
      child: Form(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Image.asset(
              "images/logoOffer.png",
              height: 200.0,
              width: 200.0,
            ),
            Padding(padding: EdgeInsets.only(bottom: 30.0)),
            Center(
                child: Text('Add New Offer',
                style: TextStyle(
                  fontSize: 20, 
                  fontWeight: FontWeight.bold))),
                SizedBox(height: 10.0),
                TextFormField(
                  decoration: InputDecoration(
                      labelText: 'Post Name', 
                      border: OutlineInputBorder()),
            ),
             SizedBox(height: 10.0),
                TextFormField(
                    decoration: InputDecoration(
                       labelText: 'Description', 
                       border: OutlineInputBorder()),
            ),
            
            SizedBox(height: 10.0),
            TextFormField(
              decoration: InputDecoration(
                  labelText: 'Number of positions', border: OutlineInputBorder()),
            ),
            Padding(padding: EdgeInsets.only(top: 20)),
            FlatButton(
              onPressed: () {},
              color: Colors.yellow[200],
              padding: EdgeInsets.fromLTRB(60, 20, 50,20),
              child: Text("Add"),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0)),
            ),
          
               Padding(padding: EdgeInsets.only(top: 20)),
            FlatButton(
              onPressed: () {
                },
              color: Colors.deepPurple[200],
              child: Text("Cancel"),
              padding: EdgeInsets.fromLTRB(60, 20, 50,20),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0)),
            ),
          ],
        ),
      ),
    )));
  }
}
