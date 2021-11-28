import 'package:flutter/material.dart';
import 'admin_page.dart';

class AdminDashboardPage extends StatelessWidget {
  AdminDashboardPage({Key? key, required this.title}) : super(key: key);

  final String title;
  late int selectedIndex = 0;

  get handleClick => null;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        actions: <Widget>[
          Icon(
            Icons.search,
            color: Colors.black,
          ),
          PopupMenuButton<String>(
            onSelected: handleClick,
            itemBuilder: (BuildContext context) {
              return {'Logout', 'Settings'}.map((String choice) {
                return PopupMenuItem<String>(
                  value: choice,
                  child: Text(choice),
                );
              }).toList();
            },
          ),
        ],
        backgroundColor: Colors.teal,
      ),
      drawer: Sidenav((int index) {
        setState(() {
          selectedIndex = index;
        });
      }),
      body: Builder(
        builder: (context) {
          if (selectedIndex == 0) {
            return const AdminPage();
          }
          if (selectedIndex == 1) {
            return Center(child: Text('selected index is 1'));
          }
          if (selectedIndex == 2) {
            return Center(child: Text('selected index is 2'));
          }
          if (selectedIndex == 3) {
            return Center(child: Text('selected index is 3'));
          }
          if (selectedIndex == 4) {
            return Center(child: Text('selected index is 4'));
          }
          if (selectedIndex == 5) {
            return Center(child: Text('selected index is 5'));
          }
          if (selectedIndex == 6) {
            return Center(child: Text('selected index is 6'));
          }
          return Container();
        },
      ),

      /*Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            RaisedButton(
                child: const Text("back to login page"),
                color: Colors.teal,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pop(context);
                }
            ),
          ],
        ),
      ),*/
    );
  }

  void setState(Null Function() param0) {}
}

class Sidenav extends StatelessWidget {
  final Function onIndexChanged;
  Sidenav(this.onIndexChanged);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.all(6.0),
            child: const Image(
              image: AssetImage(
                'images/logos.png',
              ),
              height: 50.0,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(7.0),
            child: Center(
                child: Text('- Easy Recruite - ',
                    style: TextStyle(
                        fontSize: 21,
                        color: Theme.of(context).primaryColorDark))),
          ),
          Divider(color: Colors.grey.shade500),
          ListTile(
            title: Text(' Dashboard'),
            leading: Icon(
              Icons.dashboard,
              color: Colors.black,
            ),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(0);
            },
          ),
          Divider(color: Colors.grey.shade500),
          ListTile(
            title: Text(' Admin '),
            leading: Icon(
              Icons.admin_panel_settings,
              color: Colors.black,
            ),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(1);
            },
          ),
          Divider(color: Colors.grey.shade500),
          ListTile(
            title: Text(' Recruter '),
            leading: Icon(
              Icons.person_search,
              color: Colors.black,
            ),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(2);
            },
          ),
          Divider(color: Colors.grey.shade500),
          ListTile(
            title: Text(' Interviwer '),
            leading: Icon(
              Icons.video_camera_front,
              color: Colors.black,
            ),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(3);
            },
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text('Schedule',
                style: TextStyle(
                    fontSize: 21, color: Theme.of(context).primaryColorDark)),
          ),
          Divider(color: Colors.grey.shade500),
          ListTile(
            title: Text(' Calendar '),
            leading: Icon(
              Icons.today,
              color: Colors.black,
            ),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(4);
            },
          ),
          ListTile(
            title: Text(' Mailbox '),
            leading: Icon(
              Icons.email,
              color: Colors.black,
            ),
            trailing: Text('44'),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(5);
            },
          ),
          ListTile(
            title: Text(' Schedule send  '),
            leading: Icon(
              Icons.schedule_send,
              color: Colors.black,
            ),
            trailing: Text('2', style: TextStyle(fontWeight: FontWeight.w600)),
            onTap: () {
              Navigator.of(context).pop();
              onIndexChanged(6);
            },
          ),
        ],
      ),
    );
  }
}
