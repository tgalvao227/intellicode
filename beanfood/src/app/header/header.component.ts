import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class HeaderComponent {

}
