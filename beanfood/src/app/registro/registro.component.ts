import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe]
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;

  subscription: Subscription = new Subscription();

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
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {

    this.subscribeToCepChanges();

    this.registerForm.get('cep')?.valueChanges.subscribe(() => {
        this.buscarCep();
    });
  }

  cpfValidator(control: any) {
    const cpf = control.value;
    if (cpf && cpf.length === 14) 
      return null;

    return { invalidCpf: true };
  }

  subscribeToCepChanges(): void {
    const cepControl = this.registerForm.get('cep');
    if (cepControl) {
      this.subscription = cepControl.valueChanges.pipe(
        debounceTime(500) // delay of 500ms
      ).subscribe(() => {
        this.buscarCep();
      });
    }
  }

  phoneValidator(control: any) {
    const phone = control.value;
    if (phone && phone.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) 
      return null;

      return { invalidPhone: true };
    }
   
    
    onSubmit(): void {
          
        // if (this.registerForm.valid) {
            const formData = this.registerForm.value;
            console.log(formData);

            const payload = {
                email: formData.email,
                senha: formData.password,
                nome: formData.firstName,
                sobrenome: formData.lastName,
                cpf: formData.cpf,
                sexo: formData.gender == 'male' ? 'm' : 'f',
                dataNascimento: formData.birthdate,
                enderecos: [{
                    cep: formData.cep,
                    logradouro: formData.logradouro,
                    numero: formData.numero,
                    complemento: formData.complemento,
                    bairro: formData.bairro,
                    cidade: formData.cidade,
                    estado: formData.estado
                }], 
                contatos: [{
                    celular: formData.phone
                }]
            }

            this.http.post('api/registrar', payload, {responseType: 'text'}).subscribe({
                next: (response) => {
                  console.log('Cadastro realizado com sucesso!', response);
                  this.router.navigate(['/login']);
                },
                error: (error) => {
                  console.error('Erro ao realizar o cadastro', error);
                }
              });
        // } else {
        //     console.log('Formulário inválido');
        // }
    }

    buscarCep() {
        const cep = this.registerForm.get('cep')?.value;

        console.log('Buscando CEP', cep);

        if (cep && cep.length === 8) { // 9 characters for Brazilian CEP format: 00000-000

            this.http.get(`cep/ws/${cep}/json/`).subscribe((data: any) => {
            this.registerForm.patchValue({
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf
            });
            });
      }
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
}
