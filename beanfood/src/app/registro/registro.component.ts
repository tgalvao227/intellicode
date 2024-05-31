import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
    imports: [FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule]
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
            profile: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
            gender: ['', Validators.required],
            birthdate: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]],
            cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
            newsletter: [false],
            privacyPolicy: [false, Validators.requiredTrue]
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        if (this.registerForm.valid) {
            const formData = this.registerForm.value;
            console.log(formData);

            // Substitua 'URL_DA_API' pela URL real da sua API
            this.http.post('URL_DA_API', formData).subscribe(response => {
                console.log('Cadastro realizado com sucesso!', response);
                this.router.navigate(['/login']);
            }, error => {
                console.error('Erro ao realizar o cadastro', error);
            });
        } else {
            console.log('Formulário inválido');
        }
    }
}
