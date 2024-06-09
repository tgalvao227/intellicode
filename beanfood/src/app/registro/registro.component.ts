import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe]
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', [Validators.required, this.cpfValidator]],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', [Validators.required, this.phoneValidator]],
      cep: ['', [Validators.required, this.cepValidator]],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  cpfValidator(control: any) {
    const cpf = control.value;
    if (cpf && cpf.length === 14) {
      return null;
    }
    return { invalidCpf: true };
  }

  phoneValidator(control: any) {
    const phone = control.value;
    if (phone && phone.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) {
      return null;
    }
    return { invalidPhone: true };
  }

  cepValidator(control: any) {
    const cep = control.value;
    if (cep && cep.length === 9) {
      return null;
    }
    return { invalidCep: true };
  }

  verificaCampos(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.verificaCampos(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
        control?.markAsDirty({ onlySelf: true });
      }
    });
  }

  onSubmit(): void {
    this.verificaCampos(this.registerForm);

    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log("foi");
      console.log(formData);

      // Substitua 'URL_DA_API' pela URL real da sua API
      // this.http.post('URL_DA_API', formData).subscribe(response => {
      //     console.log('Cadastro realizado com sucesso!', response);
      //     this.router.navigate(['/login']);
      // }, error => {
      //     console.error('Erro ao realizar o cadastro', error);
      // });

    } else {
      console.log('Formulário inválido');
      console.log(this.registerForm.value);
    }
  }
}
