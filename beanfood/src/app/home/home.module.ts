import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    HomeComponent,
    MatIconModule,
    HeaderModule
  
  ]
})
export class HomeModule { }
