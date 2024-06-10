import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, HomeComponent, HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  userData: any;

  ngOnInit(): void {
    this.userData = this.getUserData();
  }

  getUserData() {
    // Primeiro, obtenha a string JSON armazenada em 'data'
    const dataString = localStorage.getItem('data');
    
    // Parseie a string JSON para um objeto
    const dataObj = dataString ? JSON.parse(dataString) : null;

    console.log(dataObj);
    
    return dataObj
  }

}
