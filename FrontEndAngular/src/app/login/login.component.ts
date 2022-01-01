import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';
import { Employee } from '../Models/employee';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new Employee();
public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm= this.formBuilder.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.minLength(3), Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login(this.loginForm.value)
  }

}