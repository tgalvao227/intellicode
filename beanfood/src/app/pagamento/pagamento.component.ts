import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PagamentoService } from './pagamento.service';

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

  //dadosPagamento: any DEPOIS COLOCAR DENTRO DO PARENTESES
  realizarPagamento() {
  //   this.pagamentoService.realizarPagamento(dadosPagamento).subscribe(
  //     response => {
  //       console.log('Pagamento realizado com sucesso:', response);
  //       // Faça algo com a resposta, como redirecionar para a página de confirmação de pagamento
  //     },
  //     error => {
  //       console.error('Erro ao realizar o pagamento:', error);
  //       // Trate o erro, por exemplo, mostrando uma mensagem de erro para o usuário
  //     }
  //   );
   }
}
