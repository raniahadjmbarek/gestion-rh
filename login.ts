import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  seConnecter() {
    this.router.navigate(['/dashboard']);
  }

  // FONCTION POUR ALLER À LA PAGE REINITIALISER
  allerReinitialiser() {
    this.router.navigate(['/reinitialiser']);
  }
}

