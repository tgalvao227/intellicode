import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { HomeComponent } from '../home/home.component';
import { MatCard } from '@angular/material/card';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, RegistroComponent, HeaderComponent, FooterComponent]
})
export class LoginComponent {

}
