import 'Classes/job_offer_class.dart';
import 'Classes/role_class.dart';
import 'Classes/user_class.dart';
import 'Classes/question_class.dart';
import 'Classes/user_role_class.dart';
import 'Classes/cv_class.dart';
import 'Classes/interview_class.dart';

void main() {
  //Testing Classes JobOffers , Role
  JobOffer offer1 = JobOffer(1, "offre1", "offre1", 10, DateTime(2012));
  print(offer1.gettitle);
  print(offer1.getPostNumber);
  print(offer1.getDate);

  Role role1 = Role(1, "Admin");
  Role role2 = Role(2, "Recruteur");
  Role role3 = Role(3, "Interviewer");

  print(role1.getRoleType);
  print(role2.getRoleType);
  print(role3.getRoleType);

//testing Users classes
  User user1 = User(1, "hanin", "benJemaa", "benjemaahanin@gmail.com", "test",
      11429208, 54891315, "bizerte", "photo", DateTime(2021), "test");
  print(user1.getfirstName);
  print(user1.getlastName);
  print(user1.getemail);
  print(user1.getpassword);
  print(user1.getcin);
  print(user1.getphoneNumber);
  print(user1.getadress);

//testing question class
  Question question1 = Question(1, "what is your name ?");
  print(question1.getidQuestion);
  print(question1.getquestion);

//testing userRole class
  UserRole userRole1 = UserRole(1, 2, 3);
  print(userRole1.getidRole);
  print(userRole1.getidUser);
  print(userRole1.getidUserRole);

  Cv c = Cv(1, "cv num 1");
  print(c.getcv);
  print(c.getidCv);

// test class Interview

  Interview i = Interview(2020, 20, "aaaaa", 1);
  print("Nour test :");
  print(i.getlocation);
  print(i.getdate);
}
