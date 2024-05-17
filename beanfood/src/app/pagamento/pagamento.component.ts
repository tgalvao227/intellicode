import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
  imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class PagamentoComponent {

  formaPagamento: string = 'card'; // Definindo a forma de pagamento padrão como 'card'

  // Método para lidar com alterações na forma de pagamento
  onPaymentMethodChange(paymentMethod: string) {
    this.formaPagamento = paymentMethod;
  }

}
