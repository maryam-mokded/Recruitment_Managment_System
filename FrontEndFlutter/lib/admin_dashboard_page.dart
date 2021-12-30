import 'package:flutter/material.dart';
import 'package:front_end_flutter/calendar.dart';
import 'package:front_end_flutter/admin_page.dart';
import 'package:front_end_flutter/employees.dart';
import 'package:front_end_flutter/mailBox.dart';
import 'package:front_end_flutter/offers.dart';
import 'package:front_end_flutter/profil.dart';
import 'package:front_end_flutter/questionsList.dart';
import 'package:front_end_flutter/interviews.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyDashboardPage(),
    );
  }
}

class MyDashboardPage extends StatefulWidget {
  @override
  _AdminDashboardPage createState() => new _AdminDashboardPage();
}
class _AdminDashboardPage extends State<MyDashboardPage> {
  int selectedIndex = 0;

  get handleClick => null;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,
              colors: <Color>[Colors.greenAccent[400]!, Colors.blue[400]!],
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
            onPressed: () {
              Navigator.pop(context);
            },
          ),
        ],
        backgroundColor: Colors.teal,
      ),
      drawer: Sidenav((int index) {
        setState(() {
          selectedIndex = index;
        });
      }, selectedIndex),
      body: Builder(
        builder: (context) {
          if (selectedIndex == 0) {
            return HomeScreen();
          }
          if (selectedIndex == 1) {
            return const MyProfilApp();
          }

          if (selectedIndex == 2) {
            return const MyOfferPageApp();
          }
          if (selectedIndex == 3) {
            return MyEmployeesPage();
          }
          if (selectedIndex == 4) {
            return const QuestionsList(
              title: 'Question',
            );
          }
          if (selectedIndex == 5) {
            return Calendar(
                // title: 'Calendar',
                );
          }
          if (selectedIndex == 6) {
            return const MyMailBoxPage(
              title: 'MailBox',
            );
          }
          if (selectedIndex == 7) {
            return const Interviews(
              title: 'Interviews',
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
  Sidenav(this.onIndexChanged, this.selectedIndex);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          Padding(
            padding: EdgeInsets.all(6.0),
            child: Image(
              image: NetworkImage(
                   'https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
              ),
              height: 50.0,
            ),
          ),
          Padding(
            padding: EdgeInsets.all(7.0),
            child: Center(
                child: Text('- Easy Recruite - ',
                    style: TextStyle(
                        fontSize: 21,
                        color: Theme.of(context).primaryColorDark))),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 0
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Dashboard'),
              selected: selectedIndex == 0,
              leading: Icon(Icons.dashboard,
                  color: selectedIndex == 0
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(0);
              },
            ),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 1
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Profile '),
              selected: selectedIndex == 1,
              leading: Icon(Icons.admin_panel_settings,
                  color: selectedIndex == 1
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(1);
              },
            ),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 2
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Offers '),
              selected: selectedIndex == 2,
              leading: Icon(Icons.person_search,
                  color: selectedIndex == 2
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(2);
              },
            ),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 3
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Employees '),
              selected: selectedIndex == 3,
              leading: Icon(Icons.video_camera_front,
                  color: selectedIndex == 3
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(3);
              },
            ),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 4
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Question '),
              selected: selectedIndex == 4,
              leading: Icon(Icons.admin_panel_settings,
                  color: selectedIndex == 4
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(4);
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Text('Schedule',
                style: TextStyle(
                    fontSize: 21, color: Theme.of(context).primaryColorDark)),
          ),
          Divider(color: Colors.grey.shade500),
          Container(
            color: selectedIndex == 5
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Calendar '),
              selected: selectedIndex == 5,
              leading: Icon(Icons.today,
                  color: selectedIndex == 5
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(5);
              },
            ),
          ),
          Container(
            color: selectedIndex == 6
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Mailbox '),
              selected: selectedIndex == 6,
              leading: Icon(Icons.email,
                  color: selectedIndex == 6
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              trailing: Text('44'),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(6);
              },
            ),
          ),
          Container(
            color: selectedIndex == 7
                ? Theme.of(context).primaryColorLight
                : Colors.transparent,
            child: ListTile(
              title: Text(' Schedule send  '),
              selected: selectedIndex == 7,
              leading: Icon(Icons.schedule_send,
                  color: selectedIndex == 7
                      ? Theme.of(context).primaryColor
                      : Colors.black),
              trailing:
                  Text('2', style: TextStyle(fontWeight: FontWeight.w600)),
              onTap: () {
                Navigator.of(context).pop();
                onIndexChanged(7);
              },
            ),
          ),
        ],
      ),
    );
  }
}
