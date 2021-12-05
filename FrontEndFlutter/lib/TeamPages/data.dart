class NavigationItem {

  String title;

  NavigationItem(this.title);

}

List<NavigationItem> getNavigationItemList(){
  return <NavigationItem>[
    //NavigationItem("Jobs"),
    NavigationItem("Team"),
  ];
}

class Team {

  String position;
  String company;
  String status;
  String price;
  String logo;

  Team(this.position, this.company, this.status, this.price, this.logo);

}

List<Team> getTeams(){
  return <Team>[
    Team("Nour Guerfali ", "Developpeur", "Details", "40", "images/Nour.jpg"),
    Team("Hanin Ben Jemaa", "Product Designer", "Details", "60", "images/Hanin.jpg"),
    Team("Maryam Mokded ", "UX Designer", "Details", "55", "images/Maryam.jpg"),
  ];
}

class Job {

  String position;
  String company;
  String price;
  String concept;
  String logo;
  String city;

  Job(this.position, this.company, this.price, this.concept, this.logo, this.city);

}

List<Job> getJobs(){
  return <Job>[
    Job("Flutter UI/UX", "Nike Inc.", "40", "Full-Time", "images/nike.png", "San Francisco, California"),
    Job("Product Designer", "Google LLC", "60", "Part-Time", "images/google.png", "San Francisco, California"),
    Job("UI / UX Designer", "Uber Technologies Inc.", "55", "Full-Time", "images/uber.png", "San Francisco, California"),
    Job("Lead UI/UX Designer", "Apple Inc.", "80", "Part-Time", "images/apple.png", "San Francisco, California"),
    Job("Flutter Developer", "Amazon Inc.", "60", "Full-Time", "images/amazon.jpg", "San Francisco, California"),
  ];
}

List<String> getJobsRequirements(){
  return <String>[
    "Exceptional communication skills and team-working skills",
    "Know the principles of animation and you can create high fidelity prototypes",
    "Direct experience using Adobe Premiere, Adobe After Effects & other tools used to create videos, animations, etc.",
    "Good UI/UX knowledge",
  ];
}