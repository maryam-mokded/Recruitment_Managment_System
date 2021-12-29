import 'package:flutter/material.dart';

class User {
  final image;
  final firstname;
  final lastname;
  final email;

  User(this.image, this.firstname, this.lastname, this.email);
}

class ListUsers extends StatelessWidget {
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
      backgroundColor: Color(0xfff6f7f9),
      appBar: AppBar(
        title: Text('Employees List'),
      ),
      body: ListView(
        children: <Widget>[
          Container(
            margin: EdgeInsets.symmetric(vertical: 2, horizontal: 10),
            height: 50,
            child: ListView(
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
            ),
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