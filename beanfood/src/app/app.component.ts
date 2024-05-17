import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CompraComponent } from './compra/compra.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, HomeComponent, RegistroComponent, CompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beanfood';
}
