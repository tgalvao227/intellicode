import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', component: HomeComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'finalizar-compra', component: FinalizarCompraComponent },
    { path: 'sobre', component: SobreComponent }
  ];
