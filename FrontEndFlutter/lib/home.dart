import 'package:flutter/material.dart';
import 'package:front_end_flutter/TeamPages/master.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("RMS"),
          actions: [
            IconButton(
              icon: const Icon(Icons.notifications_none),
              onPressed: () {
                Navigator.pushNamed(context, '/offer');
              },
            ),
            IconButton(
              icon: const Icon(Icons.login_outlined),
              onPressed: () {
                Navigator.pushNamed(context, '/login');
              },
            ),
          ],
          //backgroundColor: Colors.purple,
          flexibleSpace: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.purple, Colors.teal],
                begin: Alignment.bottomRight,
                end: Alignment.topLeft,
              ),
            ),
          ),
          bottom: const TabBar(
            indicatorColor: Colors.white,
            indicatorWeight: 5,
            tabs: [
              Tab(icon: Icon(Icons.home), text: 'Home'),
              Tab(icon: Icon(Icons.face), text: 'About'),
              Tab(icon: Icon(Icons.group), text: 'Teams'),
              Tab(icon: Icon(Icons.email), text: 'Contact'),
            ],
          ),
        ),
        body:  TabBarView(
          children: [
            buidBoucleOffers(),
            buildAboutPage(),
            Master() ,
            buildContactPage() ,
          ],
        ),    
      ),
     );
  }
  
  Widget buidBoucleOffers(){
    return ListView(
         children:<Widget> [
            Padding(padding: EdgeInsets.only(top: 30)),
           Center(
            child: Text(
              "Our Offers",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 30 ,
                color: Colors.teal
              ),
            ),
           ),
            buildHomePage(),
            buildHomePage(),
            buildHomePage(),
  
          ],
    );
  }
  
  Widget buildContactPage() => Center(
        child: Text(
          "Contact",
          style: TextStyle(fontSize: 28),
        ),
      );


   Widget buildAboutPage() => Center(
        child: Text(
          "About",
          style: TextStyle(fontSize: 28),
        ),
      );

   Widget buildTeamsPage() => Center(
        child: Text(
          "Teams",
          style: TextStyle(fontSize: 28),
        ),
      );




  Widget buildHomePage() {
    return   Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
           children:<Widget>[
            Padding(
              padding: const EdgeInsets.only(
                  left: 24, right: 24, top: 8, bottom: 16),
              child: InkWell(
                splashColor: Colors.transparent,
                //onTap: callback,
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: const BorderRadius.all(Radius.circular(16.0)),
                    boxShadow: <BoxShadow>[
                      BoxShadow(
                        color: Colors.grey.withOpacity(0.6),
                        offset: const Offset(4, 4),
                        blurRadius: 16,
                      ),
                    ],
                  ),
                  child: ClipRRect(
                    borderRadius: const BorderRadius.all(Radius.circular(16.0)),
                    child: Stack(
                      children: <Widget>[
                        Column(
                          children: <Widget>[
                            AspectRatio(
                              aspectRatio: 2,
                              child: Image.asset(
                                'images/offre.png',
                                 fit: BoxFit.cover,
                              ),
                            ),
                            Container(
                              color: Colors.white,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget>[
                                  Expanded(
                                    child: Container(
                                      child: Padding(
                                        padding: const EdgeInsets.only(
                                            left: 16, top: 8, bottom: 8),
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: <Widget>[
                                            Text(
                                              "Offre d'emploi 1",
                                              textAlign: TextAlign.left,
                                              style: TextStyle(
                                                fontWeight: FontWeight.w600,
                                                fontSize: 22,
                                              ),
                                            ),
                                            Row(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.center,
                                              mainAxisAlignment:
                                                  MainAxisAlignment.start,
                                              children: <Widget>[
                                                Text(
                                                  'Description ...',
                                                  style: TextStyle(
                                                      fontSize: 14,
                                                      color: Colors.grey
                                                          .withOpacity(0.8)),
                                                ),
                                                const SizedBox(
                                                  width: 4,
                                                ),
                                              ],
                                            ),
                                            Padding(
                                              padding:
                                                  const EdgeInsets.only(top: 4),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        right: 16, top: 8),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        Positioned(
                          top: 8,
                          right: 8,
                          child: Material(
                            color: Colors.transparent,
                            child: InkWell(
                              borderRadius: const BorderRadius.all(
                                Radius.circular(32.0),
                              ),
                              onTap: () {},
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),

                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
       );
  } 
}
