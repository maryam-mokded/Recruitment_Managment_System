import 'package:flutter/material.dart';
import 'package:front_end_flutter/TeamPages/team_details.dart';


import 'data.dart';


class Teams extends StatefulWidget {
  @override
  _TeamsState createState() => _TeamsState();
}

class _TeamsState extends State<Teams> {

  List<Team> teams = getTeams();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [

          Padding(
            padding: EdgeInsets.only(right: 32, left: 32, top: 48, bottom: 32),
            child: Text(
              "Our \nTeams (" + teams.length.toString() + ")",
              style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  height: 1.2
              ),
            ),
          ),

          Padding(
            padding: EdgeInsets.only(right: 32, left: 32, bottom: 8),
            child: Column(
              children: buildTeams(),
            ),
          ),
        ],
      ),

    );
  }

  List<Widget> buildTeams(){
    List<Widget> list = [];
    for (var i = 0; i < teams.length; i++) {
      list.add(buildTeam(teams[i]));
    }
    return list;
  }

  Widget buildTeam(Team team){
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => Detail(team: team)),
        );
      },
      child: Container(

        padding: EdgeInsets.all(24),
        margin: EdgeInsets.symmetric(vertical: 4),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.all(
            Radius.circular(10),
          ),
        ),
        child: Column(
          children: [

            Row(
              children: [

                Container(
                  height: 60,
                  width: 60,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage(team.logo),
                      fit: BoxFit.fitWidth,
                    ),
                    borderRadius: BorderRadius.all(
                      Radius.circular(10),
                    ),
                  ),
                ),

                Expanded(
                    child: Padding(
                      padding: EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [

                          Text(
                            team.position,
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),

                          Text(
                            team.company,
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                              color: Colors.grey,
                            ),
                          ),

                        ],
                      ),
                    )
                ),

                Icon(
                  Icons.more_vert,
                ),

              ],
            ),

            SizedBox(
              height: 16,
            ),

            Row(
              children: [

                Expanded(
                  child: Container(
                    height: 45,
                    decoration: BoxDecoration(
                      color: Colors.grey[200],
                      borderRadius: BorderRadius.all(
                        Radius.circular(10),
                      ),
                    ),
                    child: Center(
                      child: Text(
                        team.status,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                          color: team.status == "Opened" ? Colors.green[500] :
                          team.status == "Cancelled" ? Colors.red[500] : Colors.black,
                        ),
                      ),
                    ),
                  ),
                ),

                Expanded(
                  child: Container(
                    child: Center(
                      child: Text(
                        r"$" + team.price + "/h",
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                  ),
                ),

              ],
            ),

          ],
        ),
      ),
    );
  }

  Widget buildLastJob(Team team){
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => Detail(team: team)),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.all(
            Radius.circular(10),
          ),
        ),
        padding: EdgeInsets.all(16),
        margin: EdgeInsets.only(bottom: 16),
        child: Row(
          children: [

            Container(
              height: 45,
              width: 45,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(team.logo),
                  fit: BoxFit.fitWidth,
                ),
                borderRadius: BorderRadius.all(
                  Radius.circular(10),
                ),
              ),
            ),

          ],
        ),
      ),


    );
  }

}