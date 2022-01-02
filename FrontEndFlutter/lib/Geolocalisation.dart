import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
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

  var long = "longitude";
  var lat = "latitude";
  void getlocation() async {
    LocationPermission per = await Geolocator.checkPermission();
    if (per == LocationPermission.denied ||
        per == LocationPermission.deniedForever) {
      print("permission denied");
      LocationPermission per1 = await Geolocator.requestPermission();
    } else {
      Position currentLoc = await Geolocator.getCurrentPosition(
          desiredAccuracy: LocationAccuracy.best);
      setState(() {
        long = currentLoc.longitude.toString();
        lat = currentLoc.latitude.toString();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            // crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                "longitude : " + long,
                style: TextStyle(
                  color: Colors.purpleAccent,
                  fontSize: 30,
                ),
              ),
              Text(
                "latitude : " + lat,
                style: TextStyle(
                  color: Colors.purpleAccent,
                  fontSize: 35,
                ),

              ),
              MaterialButton(
                onPressed: getlocation,
                color: Colors.yellow[200]!,
                child: Text(
                  "Get Location",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 40,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}