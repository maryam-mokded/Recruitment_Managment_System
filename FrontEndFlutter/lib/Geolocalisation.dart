import 'package:flutter/material.dart';
// import 'package:location/location.dart';

void main()=>runApp(MyGeolocalisationPageApp());

class MyGeolocalisationPageApp extends StatelessWidget {
  const MyGeolocalisationPageApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home:MyGeolocalisationPage(),
    );
  }
}

class MyGeolocalisationPage extends StatefulWidget {
 
   @override
  State<MyGeolocalisationPage> createState() => _MyGeolocalisationPageState();
}

class _MyGeolocalisationPageState extends State<MyGeolocalisationPage> {

  // Location _location = Location();
  // late LocationData _locationData;

  // @override
  // void initState() {
  //   // TODO: implement initState
  //   super.initState();
  //   _getPosition();
  // }

  //   Future<void>  _getPosition() async {
  //       try{
  //         _locationData = await _location.getLocation();
  //       }catch(e){
  //         print('Get Position Error : $e !');
  //       }
  //     }


  @override
  Widget build(BuildContext context) {
    return Scaffold(  
      body: Center(child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
            Padding(padding: EdgeInsets.only(top: 50.0)),
          const Text(
            'Your Location is :',
            style : TextStyle(fontSize: 28,
                              fontWeight: FontWeight.bold,
                              color: Colors.deepPurple),
          ),
          // Text(
          //   _locationData == null ?'Waiting For Position ' : 'Latitude :${_locationData.latitude}',
          //   style:Theme.of(context).textTheme.headline4,
          // ),
          // Text(
          //   _locationData == null ?'Waiting For Position ' : 'Longitude :${_locationData.longitude}',
          //   style:Theme.of(context).textTheme.headline4,
          // ),
        ],
      ),),
    );
  }
}
