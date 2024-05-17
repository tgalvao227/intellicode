import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistroService } from './registro.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
    imports: [ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent]
})
export class RegistroComponent {
  testeForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
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
    });
  }

  onSubmit() {
    if (this.testeForm.valid) {
      console.log('Form Submitted', this.testeForm.value);
      this.registroService.enviarDadosFormulario(this.testeForm.value)
        .subscribe(
          response => {
            console.log('Response:', response);
            // Faça algo com a resposta do servidor, se necessário
          },
          error => {
            console.error('Error:', error);
            // Lide com o erro, se necessário
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }
}
