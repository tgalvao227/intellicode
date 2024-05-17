import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
    imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule, RouterLink]
})
export class RegistroComponent {
  testeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profile: ['Pessoa Física', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/\d{3}\.\d{3}\.\d{3}-\d{2}/)]],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/\(\d{2}\) \d{4,5}-\d{4}/)]],
      cep: ['', [Validators.required, Validators.pattern(/\d{5}-\d{3}/)]],
      newsletter: [false],
      privacyPolicy: [false, Validators.requiredTrue]
    })
  }

  onSubmit() {
    if (this.testeForm.valid) {
      console.log('Form Submitted', this.testeForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}