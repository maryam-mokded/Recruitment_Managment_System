import 'package:flutter/material.dart';
import 'package:front_end_flutter/home.dart';
import '../../admin_dashboard_page.dart';

class MyLoginPage extends StatelessWidget {
  const MyLoginPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      /*appBar: AppBar(
        title: Text(title),
        backgroundColor: Colors.teal,
      ),*/
      body: Center(
        child: ListView(
          shrinkWrap: true,
          padding: const EdgeInsets.only(left: 40.0, right: 40.0, top: 0.0),
          children: <Widget>[
            const Text(
              "Sign In",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 40.0,
                color: Colors.black,
              ),
            ),
            const Image(
                image: AssetImage(
              'images/login.png',
            )),
            TextFormField(
              keyboardType: TextInputType.emailAddress,
              autofocus: false,
              decoration: InputDecoration(
                prefixIcon: Icon(
                  Icons.email,
                  color: Colors.black,
                ),
                labelText: 'Email Adress',
                border: OutlineInputBorder(),
                hintText: ' Enter your email',
                contentPadding: EdgeInsets.fromLTRB(20.0, 12.0, 20.0, 12.0),
              ),
              validator: (value) {
                if (value!.isEmpty) {
                  return 'Please enter some text';
                }
              },
            ),
            SizedBox(height: 12.0),
            TextFormField(
              autofocus: false,
              obscureText: true,
              decoration: InputDecoration(
                prefixIcon: Icon(
                  Icons.lock,
                  color: Colors.black,
                ),
                labelText: 'Password',
                border: OutlineInputBorder(),
                hintText: ' Enter your password',
                contentPadding: EdgeInsets.fromLTRB(20.0, 12.0, 20.0, 12.0),
              ),
            ),
            SizedBox(height: 24.0),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16.0),
              child: RaisedButton(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (BuildContext context) => MyApp()),
                  );
                },
                padding: const EdgeInsets.all(12),
                color: Colors.teal,
                child: Text(
                  'Log In',
                  style: const TextStyle(color: Colors.white, fontSize: 20.0),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
