import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { LoginService } from './login.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

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
  banner: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
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
      const payload = {
         email: this.loginForm.get('email')?.value,
         senha: this.loginForm.get('password')?.value
      }

      this.http.post('api/login', payload).subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
        this.router.navigate(['home']);
      }, (error) => {
        console.error(error);
        this.banner = error.error;
      });
    }
   }
}
