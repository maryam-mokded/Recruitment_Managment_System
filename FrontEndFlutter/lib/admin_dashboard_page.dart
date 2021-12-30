import 'package:animated_theme_switcher/animated_theme_switcher.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:front_end_flutter/Calendar.dart';
import 'package:front_end_flutter/TeamPages/themes.dart';
import 'package:front_end_flutter/admin_page.dart';
import 'package:front_end_flutter/chat.dart';
import 'package:front_end_flutter/employees.dart';
import 'package:front_end_flutter/mailBox.dart';
import 'package:front_end_flutter/offers.dart';
import 'package:front_end_flutter/profil.dart';
import 'package:front_end_flutter/question.dart';
import 'package:front_end_flutter/send.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Admin Dashboard'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _AdminDashboardPage();
}

class _AdminDashboardPage extends State<MyHomePage> {

  int selectedIndex = 0;

  get handleClick => null;
  @override
  Widget build(BuildContext context) {

    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    final icon = CupertinoIcons.moon_stars;

    return Scaffold(
      appBar: AppBar(

     /*   actions: [

        ],*/

        flexibleSpace: Container(
        decoration: BoxDecoration(
        gradient: LinearGradient(
        begin: Alignment.centerLeft,
        end: Alignment.centerRight,
        colors: <Color>[
        Colors.greenAccent[400]!,
        Colors.blue[400]!
        ],
    ),
        ),
        ),
        title: Text(''),
        actions: <Widget>[
           Icon(
            Icons.search,
            color: Colors.white,
          ),
           IconButton(
              icon: const Icon(Icons.logout_outlined),
              onPressed : () {
                //Navigator.push(context, '/login');
                Navigator.pushNamed(context, '/login');
              },
            ),
      ],
      ),
      drawer: Sidenav((int index){
        setState((){
          selectedIndex = index;
        });
      }, selectedIndex),
      body: Builder(
        builder: (context) {
          if (selectedIndex == 0) {
             return HomeScreen();
          }
          if (selectedIndex == 1) {
            return const MyProfilPage(title: 'Profile',);
           }
          if (selectedIndex == 2) {
             return const MyOffersPage(title: 'Offers',);
            }
          if (selectedIndex == 3) {
             return MyEmployeesPage();
         }
          if (selectedIndex == 4) {
             return const MyQuestionPage(title: 'Question',);
         }
          if (selectedIndex == 5) {
            return const MyCalendarPage(title: 'Calendar',);
          }
          if (selectedIndex == 6) {
            return const MyMailBoxPage(title: 'MailBox',);
          }
           if (selectedIndex == 7) {
             return const MyScheduleSendPage(title: 'Send',);
          }

          if (selectedIndex == 8) {
          return const Chat(
          title: 'Chat',
          );
          }
          return Container();
        },
      ),
    );
  }
}
class Sidenav extends StatelessWidget {
  final Function onIndexChanged;
  final int selectedIndex;
  Sidenav(this.onIndexChanged,this.selectedIndex);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
           Padding( padding:  EdgeInsets.all(6.0),
           child:  Image(image: AssetImage('images/logos.png'),height: 50.0,),
          ),
          Padding(
            padding:  EdgeInsets.all(7.0),
            child: Center(child: Text('- Easy Recruite - ',style: TextStyle(fontSize: 21,color: Theme.of(context).primaryColorDark))),
          ),

          Divider(color: Colors.grey.shade500),
          Container(
           color: selectedIndex == 0 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title: Text(' Dashboard'),
            selected: selectedIndex == 0,
            leading: Icon(Icons.dashboard,
            color:selectedIndex == 0? Theme.of(context).primaryColor : Colors.black),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(0);
            },
          ),
        ),
          
          Divider(color: Colors.grey.shade500),
         
           Container(
           color: selectedIndex == 1 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title:  Text(' Profile '),
            selected: selectedIndex == 1,
            leading:  Icon(Icons.admin_panel_settings, color:selectedIndex == 1? Theme.of(context).primaryColor : Colors.black),
                     
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(1);
            },
           ),
          ),
          Divider(color: Colors.grey.shade500),
           Container(
           color: selectedIndex == 2 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title:  Text(' Offers '),
            selected: selectedIndex == 2,
            leading:  Icon(Icons.person_search, color:selectedIndex == 2? Theme.of(context).primaryColor : Colors.black),
           
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(2);
            },
           ),
          ),
          Divider(color: Colors.grey.shade500),
           Container(
           color: selectedIndex == 3 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title: Text(' Employees '),
            selected: selectedIndex == 3,
            leading: Icon(Icons.video_camera_front, color:selectedIndex == 3? Theme.of(context).primaryColor : Colors.black),
           
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(3);
            },
          ),
          ),
          Divider(color: Colors.grey.shade500),
          
           Container(
           color: selectedIndex == 4 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title:  Text(' Question '),
            selected: selectedIndex == 4,
            leading:  Icon(Icons.admin_panel_settings, color:selectedIndex == 4? Theme.of(context).primaryColor : Colors.black),
                     
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(4);
            },
           ),
          ),
       
          Padding(
            padding:  EdgeInsets.all(20.0),
            child: Text('Schedule',
                style: TextStyle(
                    fontSize: 21, color: Theme.of(context).primaryColorDark)),
          ),
          Divider(color: Colors.grey.shade500),
          
           Container(
           color: selectedIndex == 5 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title: Text(' Calendar '),
            selected: selectedIndex == 5,
            leading: Icon(
              Icons.today,
               color:selectedIndex == 5? Theme.of(context).primaryColor : Colors.black),
                   onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(5);
            },
           ),
          ),
          
           Container(
           color: selectedIndex == 6 ? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title: Text(' Mailbox '),
            selected: selectedIndex == 6,
            leading: Icon(
              Icons.email,
            color:selectedIndex == 6? Theme.of(context).primaryColor : Colors.black),
            trailing: Text('44'),
           
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(6);
            },
          ),
           ),
          
          
           Container(
           color: selectedIndex == 7? Theme.of(context).primaryColorLight : Colors.transparent,
           child :ListTile(
            title: Text(' Schedule send  '),
            selected: selectedIndex == 7,
            leading: Icon(
              Icons.schedule_send,
            color:selectedIndex == 7? Theme.of(context).primaryColor : Colors.black),
            trailing: Text('2', style: TextStyle(fontWeight: FontWeight.w600)),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(7);
            },
          ),
           ),

          Container(
            color: selectedIndex == 8
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Chat '),
              selected: selectedIndex == 8,
              leading: Icon(Icons.video_camera_front,
                  color: selectedIndex == 8
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(8);
              },
            ),
          ),

        ],
      ),
    );
  }
}
