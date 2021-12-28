import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndAngular';
  isLoggedin?: boolean ;
  constructor (public authService: AuthService,private router: Router) {}

ngOnInit () {
  this.authService.loadToken();
  if (this.authService.getToken()==null || 
      this.authService.isTokenExpired()){
        this.router.navigate(['/']);
   
      }
}

onLogout(){
  this.authService.logout();
}
}
