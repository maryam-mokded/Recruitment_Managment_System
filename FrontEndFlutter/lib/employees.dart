import 'package:flutter/material.dart';



class User {
  final image;
  final firstname;
  final lastname;
  final email;

  User(this.image, this.firstname, this.lastname, this.email);
}

class MyEmployeesPage extends StatelessWidget {
  //const MyEmployeesPage({Key? key, required this.title}) : super(key: key);

  //final String title;

  List users = [
    User(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAp5bkFl0ynEExwq0x-gvptxDM2WS6vOlgw&usqp=CAU',
        'Ahmed',' ben saber','ahmedbensaber@gmail.com'
    ),
    User(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd-aqDqpGTDSZFiQsWxPUW2jOq4gRucCgbQ&usqp=CAU',
        'ilhem',' ben salha','ilhembensalha@gmail.com'
    ),

    User(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyB56QC9HV1HneoiO2ACz4DNW1PCdrPISHxQ&usqp=CAU',
        'Dora',' Ayari','dorraayari01@gmail.com'
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: <Widget>[
          Container(
            margin: EdgeInsets.symmetric(vertical: 2, horizontal: 10),
            height: 50,

            /* child: SizedBox(
                width: 200,
                height: 50,
                child: RaisedButton(
                  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 30),
                  onPressed: () {
                    print("RaisedButton");
                  },
                  color: Colors.blue,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(30))),
                  child: Text(
                    "Click Me",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),*/

           child: Padding(
             padding: const EdgeInsets.only(left: 215.0),
             child: Column(
                 children: [
                   RaisedButton( //mennaa
                     onPressed: () {
                       Navigator.pushNamed(context, '/addUser');
                       //print("FlatButton");
                     },

                     child: Icon(Icons.add),
                     color: Colors.yellow[200]!,
                   ),

  ]

    ),
           ),


             /* SizedBox(
                height: 16,
              ),
              FlatButton(
                onPressed: () {
                  print("FlatButton");
                },
                child: Icon(Icons.add),
                color: Colors.amber,
              ),
              SizedBox(
                height: 16,
              ),
              OutlineButton(
                shape: StadiumBorder(),
                onPressed: () {
                  print("OutlineButton");
                },
                borderSide: BorderSide(
                  color: Colors.amber,
                  style: BorderStyle.solid,
                  width: 3,
                ),
                child: Text(
                  "Click Me",
                ),
              ),
              SizedBox(
                height: 16,
              ),
              RaisedButton(
                onPressed: () {},
                padding: EdgeInsets.zero,
                shape: StadiumBorder(),
                child: Container(
                  padding: EdgeInsets.symmetric(vertical: 10, horizontal: 16),
                  decoration: ShapeDecoration(
                    gradient: LinearGradient(colors: [Colors.blue, Colors.green]),
                    shape: StadiumBorder(),
                  ),
                  child: Text(
                    "Click Me",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
              SizedBox(
                height: 16,
              ),
              GradientOutlineButton(
                child: Text("Click Me"),
                gradient: LinearGradient(colors: [Colors.blue, Colors.green]),
                onPressed: () {},
                radius: 16,

              ),*/


           /* child: ListView(
              scrollDirection: Axis.horizontal,
              children: [
                'Featured item',
                'Most recent',
                'Item 1',
                'Item 2',
                'Item 3',
                'Etc...'
              ]
                  .map((e) => Container(
                margin: EdgeInsets.symmetric(
                    vertical: 10.0, horizontal: 15.0),
                child: OutlineButton(
                  onPressed: () {},
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30)),
                  child: Text(e),
                ),
              ))
                  .toList(),
            ),*/
          ),
          Column(
              children: users
                  .map(
                    (e) => Container(
                  margin:
                  EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(13),
                    boxShadow: [
                      BoxShadow(
                          color: Colors.black26,
                          blurRadius: 10,
                          spreadRadius: 3,
                          offset: Offset(3, 4))
                    ],
                  ),
                  child: ListTile(
                    leading: Image.network(
                      e.image,
                      fit: BoxFit.cover,
                      width: 90,
                      height: 160,
                    ),
                    title: Text(
                      e.lastname +" \n"+e.firstname,
                      style: TextStyle(fontSize: 25),
                    ),
                    subtitle: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(e.email),
                        SizedBox(height: 10),
                        Container(
                          height: 40,
                          child: Stack(
                            children: <Widget>[
                              Positioned(
                                  left: 20,
                                  bottom: 0,
                                  child: CircleAvatar(
                                      backgroundColor: Colors.green,
                                      child: Image.network(
                                          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxHTyqjCdnZsEM-EkMvn3FDBkDADcaEZ3GN1YEdWFToAJm83nX&usqp=CAU'))),
                              Positioned(
                                left: 0,
                                bottom: 0,
                                child: CircleAvatar(child: Text('a')),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              )
                  .toList())
        ],
      ),
      );

  }



 }
