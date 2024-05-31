import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { LoginService } from './login.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    CommonModule, 
    ReactiveFormsModule 
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

  //     this.loginService.login(credentials).subscribe(
  //       response => {
  //         if (response) {
  //           console.log('Login bem-sucedido:', response);
  //           // this.router.navigate(['/']); 
  //         } else {
  //           console.error('Credenciais inválidas');
  //         }
  //       },
  //       error => {
  //         console.error('Erro no login:', error);
  //       }
  //     );
     }
   }
}
