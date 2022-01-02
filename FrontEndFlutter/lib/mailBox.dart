// ignore_for_file: unnecessary_new

import 'package:flutter/material.dart';

class MyMailBoxPage extends StatelessWidget {
  const MyMailBoxPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;

    return Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: [
            Container(
              height: 180,
              decoration: BoxDecoration(
                  borderRadius:
                      BorderRadius.only(bottomRight: Radius.circular(50)),
                  gradient: LinearGradient(
                    begin: Alignment.centerLeft,
                    end: Alignment.centerRight,
                    colors: <Color>[Colors.yellow[200]!, Colors.deepPurple[200]!],
                  ),
                  boxShadow: [
                    new BoxShadow(
                        color: Color(0xFF3EB0CD).withOpacity(0.3),
                        offset: new Offset(-10.0, 0.0),
                        blurRadius: 20.0,
                        spreadRadius: 4.0)
                  ]),
              child: Stack(
                children: [
                  Positioned(
                      top: 40,
                      left: 0,
                      child: Container(
                        height: 90,
                        width: 300,
                        decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.only(
                              topRight: Radius.circular(50),
                              bottomRight: Radius.circular(50),
                            )),
                      )),
                  Positioned(
                      top: 65,
                      left: 30,
                      child: Text(
                        "Your MailBox",
                        style: TextStyle(
                            fontSize: 30,
                            color: Color(0xFF363f93),
                            fontWeight: FontWeight.bold),
                      ))
                ],
              ),
            ),
            SizedBox(
              height: height * 0.05,
            ),
            SizedBox(
                height: 230,
                child: Stack(
                  children: [
                    Positioned(
                        top: 35,
                        left: 28,
                        child: Material(
                          child: Container(
                            height: 180.0,
                            width: width * 0.9,
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(0.0),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.grey.withOpacity(0.6),
                                  spreadRadius: 4.0,
                                  blurRadius: 20.0,
                                  offset: Offset(
                                      -10.0, 10), // changes position of shadow
                                ),
                              ],
                            ),
                          ),
                        )),
                    Positioned(
                        top: 0,
                        left: 35,
                        child: Card(
                          elevation: 10.0,
                          shadowColor: Colors.grey.withOpacity(0.5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20.0),
                          ),
                          child: Container(
                            height: 150,
                            width: 130,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20.0),
                              image: DecorationImage(
                                image: AssetImage("images/email2.png"),
                                fit: BoxFit.fill,
                              ),
                            ),
                          ),
                        )),
                    Positioned(
                        top: 60,
                        left: 200,
                        child: Container(
                            height: 150,
                            width: 160,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "Your Email Here",
                                  style: TextStyle(
                                      fontSize: 20,
                                      color: Color(0xFF363f93),
                                      fontWeight: FontWeight.bold),
                                ),
                                Text(
                                  "your Name here",
                                  style: TextStyle(
                                      fontSize: 16,
                                      color: Colors.grey,
                                      fontWeight: FontWeight.bold),
                                ),
                                Divider(color: Colors.black),
                                Text(
                                  "your Comment here",
                                  style: TextStyle(
                                      fontSize: 16,
                                      color: Colors.grey,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            )))
                  ],
                )),
            Expanded(
                child: MediaQuery.removePadding(
                    context: context,
                    removeTop: true,
                    child: ListView(
                      children: [
                        Container(
                          margin: const EdgeInsets.only(bottom: 10, top: 25),
                          height: 200,
                          padding: const EdgeInsets.only(
                              left: 20, right: 20, bottom: 20),
                          child: Container(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                                colors: <Color>[Colors.yellow[200]!, Colors.deepPurple[200]!],
                              ),
                              borderRadius: const BorderRadius.only(
                                bottomLeft: Radius.circular(88.0),
                              ),
                              boxShadow: [
                                new BoxShadow(
                                    color: Colors.yellow[200]!.withOpacity(0.3),
                                    offset: new Offset(-10.0, 0.0),
                                    blurRadius: 20.0,
                                    spreadRadius: 4.0),
                              ],
                            ),
                            padding: const EdgeInsets.only(
                              left: 32,
                              top: 50.0,
                              bottom: 50,
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  "Hanin Ben Jemaà",
                                  style: TextStyle(
                                      color: Colors.black, fontSize: 12),
                                ),
                                const SizedBox(
                                  height: 2,
                                ),
                                Text(
                                  "when will i pass the interview ? ",
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Container(
                          margin: const EdgeInsets.only(bottom: 10, top: 25),
                          height: 200,
                          padding: const EdgeInsets.only(
                              left: 20, right: 20, bottom: 20),
                          child: Container(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                                colors: <Color>[Colors.yellow[200]!, Colors.deepPurple[200]!],
                              ),
                              borderRadius: const BorderRadius.only(
                                topRight: Radius.circular(88.0),
                              ),
                              boxShadow: [
                                new BoxShadow(
                                    color: Color(0xFF363F93).withOpacity(0.3),
                                    offset: new Offset(-10.0, 0.0),
                                    blurRadius: 20.0,
                                    spreadRadius: 4.0),
                              ],
                            ),
                            padding: const EdgeInsets.only(
                              left: 32,
                              top: 50.0,
                              bottom: 50,
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  "Maryem Mokded",
                                  style: TextStyle(
                                      color: Colors.black, fontSize: 12),
                                ),
                                const SizedBox(
                                  height: 2,
                                ),
                                Text(
                                  "Good morning , hope your doing great !",
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Container(
                          margin: const EdgeInsets.only(bottom: 10, top: 25),
                          height: 200,
                          padding: const EdgeInsets.only(
                              left: 20, right: 20, bottom: 20),
                          child: Container(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                                colors: <Color>[Colors.yellow[200]!, Colors.deepPurple[200]!],
                              ),
                              borderRadius: const BorderRadius.only(
                                bottomLeft: Radius.circular(88.0),
                              ),
                              boxShadow: [
                                new BoxShadow(
                                    color: Color(0xFF363F93).withOpacity(0.3),
                                    offset: new Offset(-10.0, 0.0),
                                    blurRadius: 20.0,
                                    spreadRadius: 4.0),
                              ],
                            ),
                            padding: const EdgeInsets.only(
                              left: 32,
                              top: 50.0,
                              bottom: 50,
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  "Nour Guerfalli",
                                  style: TextStyle(
                                      color: Colors.black, fontSize: 12),
                                ),
                                const SizedBox(
                                  height: 2,
                                ),
                                Text(
                                  "Hi there did you get my message ? ",
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    )))
          ],
        ));
  }
}
