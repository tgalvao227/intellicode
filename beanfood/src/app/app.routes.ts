import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { SobreComponent } from './sobre/sobre.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PedidoPersonalizadoComponent } from './pedido-personalizado/pedido-personalizado.component';
// import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'compra/:id', component: CompraComponent },
    { path: 'finalizar-compra', component: FinalizarCompraComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'pagamento', component: PagamentoComponent},
    { path: 'pedido-personalizado', component: PedidoPersonalizadoComponent },
    // { path: 'confirmacao', component: ConfirmacaoComponent }
  ];
