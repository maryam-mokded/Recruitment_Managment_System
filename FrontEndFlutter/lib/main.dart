import 'Classes/job_offer_class.dart';
import 'Classes/role_class.dart';

void main() {
  //Testing Classes JobOffers , Role
  JobOffer offer1 = JobOffer(1, "offre1","offre1",10, DateTime(2012));
  print(offer1.gettitle);
  print(offer1.getPostNumber);
  print(offer1.getDate);

  Role role1 = Role(1, "Admin");
  Role role2 = Role(2, "Recruteur");
  Role role3 = Role(3, "Interviewer");

  print(role1.getRoleType);
  print(role2.getRoleType);
  print(role3.getRoleType);


  //Testing Classes ..

  

}



















