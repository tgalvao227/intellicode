import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { LoginService } from './login.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    // if (this.loginForm.valid) {
    //   const credentials = this.loginForm.value;

    //   this.loginService.login(credentials).subscribe(
    //     response => {
    //       console.log('Login bem-sucedido:', response);
    //     },
    //     error => {
    //       console.error('Erro no login:', error);
    //     }
    //   );
    // } else {
    //   console.log('Formulário inválido. Verifique os campos.');
    // }
  }
}
