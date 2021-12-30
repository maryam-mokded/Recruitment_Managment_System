import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeScreen extends StatefulWidget {
  @override
  AdminPage createState() =>  AdminPage();
}

class AdminPage extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {

    // to get size
    var size = MediaQuery.of(context).size;

    // style
    var cardTextStyle = TextStyle(
        fontFamily: "Montserrat Regular",
        fontSize: 14,
        color: Color.fromRGBO(63, 63, 63, 1));

    return Scaffold(

      body: Stack(
        children: <Widget>[
          Container(
            height: size.height * .3,
            decoration: BoxDecoration(
                borderRadius:
                BorderRadius.only(bottomRight: Radius.circular(30),bottomLeft: Radius.circular(30)),
                gradient: LinearGradient(
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                  colors: <Color>[Colors.yellow[200]!, Colors.deepPurple[200]!],
                ),
                boxShadow: [
                  new BoxShadow(
                      color: Color(0xFF3EB0CD).withOpacity(0.2),
                      offset: new Offset(-10.0, 0.0),
                      blurRadius: 40.0,
                      spreadRadius: 10.0)
                ]),
          ),
          SafeArea(
            child: Padding(
              padding: EdgeInsets.all(16.0),
              child: Column(
                children: <Widget>[
                  Container(
                    height: 64,
                    margin: EdgeInsets.only(bottom: 20),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                       /* CircleAvatar(
                          radius: 32,
                          backgroundImage: AssetImage(
                              'images/Nour.jpg'),
                        ),*/
                        SizedBox(
                          width: 16,
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Center(
                              child: Text(
                                '    DashBoard Admin',
                                style: TextStyle(
                                    fontFamily: "Montserrat Medium",
                                    color: Colors.white,
                                    fontSize: 31),
                              ),
                            ),
                           /* Text(
                              'nourguerfali08@gmail.com',
                              style: TextStyle(
                                  fontSize: 14,
                                  color: Colors.white,
                                  fontFamily: "Montserrat Regular"),
                            )*/
                          ],
                        )
                      ],
                    ),
                  ),
                  Expanded(
                    child: GridView.count(
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10,
                      primary: false,
                      crossAxisCount: 2,
                      children: <Widget>[
                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/avatar.png',
                                height: 128,
                              ),
                              Text(
                                'Employees',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),

                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/analysis.png',
                                height: 128,
                              ),
                              Text(
                                'Analysis',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),

                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/settings.png',
                                height: 128,
                              ),
                              Text(
                                'Settings',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),

                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/results.png',
                                height: 128,
                              ),
                              Text(
                                'Results',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),

                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/calendar.png',
                                height: 128,
                              ),
                              Text(
                                'Calendar',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),

                        Card(
                          shape:RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)
                          ),
                          elevation: 4,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Image.asset(
                                'images/productivity.png',
                                height: 128,
                              ),
                              Text(
                                'Productivities',
                                style: cardTextStyle,
                              )
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
