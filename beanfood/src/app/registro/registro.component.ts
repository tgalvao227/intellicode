import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
// import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, ) {} //INSERIR O PRIVATE DO SERVICE

  ngOnInit(): void {
    this.registroForm = this.fb.group({
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
  //   if (this.registroForm.valid) {
  //     const userData = this.registroForm.value;

  //     this.registroService.registrarUsuario(userData).subscribe(
  //       response => {
  //         console.log('Usuário registrado com sucesso:', response);
          
  //       },
  //       error => {
  //         console.error('Erro ao registrar usuário:', error);
         
  //       }
  //     );
  //   } else {
  //     console.log('Formulário inválido. Verifique os campos.');
  //   }
  }
}
