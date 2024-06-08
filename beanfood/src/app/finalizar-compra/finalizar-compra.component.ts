import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarrinhoService, PedidoPersonalizado } from '../carrinho/carrinho.service';
import { Itens } from '../home/home.component';
import { Item } from '../carrinho/carrinho.service';

@Component({
    selector: 'app-finalizar-compra',
    standalone: true,
    templateUrl: './finalizar-compra.component.html',
    styleUrls: ['./finalizar-compra.component.scss'],
    imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule, RouterLink]
})
export class FinalizarCompraComponent {
    carrinho: Itens[] = [];
    pedidoPersonalizado: PedidoPersonalizado | undefined;
    formaPagamento: string = 'cartao'; // Definindo a forma de pagamento padrão como cartão
    enderecoEntregaFormControl: FormControl = new FormControl('');
    mostrarNovoEndereco: boolean = false;
    enderecoEntrega: string = 'Rua Cubatão, 726 - Vila Mariana, São Paulo - SP';


    constructor(private carrinhoService: CarrinhoService,
      private router: Router,
      private route: ActivatedRoute,
    ) { }
    
    ngOnInit(): void {
        this.carrinho = this.carrinhoService.getCarrinho();
        this.pedidoPersonalizado = this.carrinhoService.getPedidoPersonalizado();
        console.log(this.pedidoPersonalizado);
        this.calcularTotal;
        this.calcularTotalPedidoPersonalizado
        console.log('Total do pedido personalizado:', this.calcularTotalPedidoPersonalizado());
    }

    // Função para lidar com alterações na forma de pagamento
    onFormaPagamentoChange(event: any) {
        this.formaPagamento = event.target.value;
    }

    calcularValorProdutos(): number {
      // Obtem os itens do carrinho
      const itens = this.carrinhoService.getCarrinho();
      // Calcula o valor total dos produtos
      console.log(itens);
      return itens.reduce((total, item) => total + (parseFloat(item.preco.replace('R$', '').replace(',', '.')) * item.quantidade), 0);
    }
    
    calcularTotal(): number {
      return this.calcularValorProdutos() + this.calcularTotalPedidoPersonalizado() + 7.00;
    }

    calcularTotalPedidoPersonalizado(): number {
      if (this.pedidoPersonalizado) {
        // Obtenha a proteína do pedido personalizado
        const proteina = this.pedidoPersonalizado.proteina ? this.pedidoPersonalizado.proteina.preco : 0;
    
        // Obtenha os acompanhamentos do pedido personalizado
        const acompanhamentos = this.pedidoPersonalizado.acompanhamentos.reduce((total, acompanhamento) => {
          return total + acompanhamento.preco;
        }, 0);
    
        // Retorne o total somando a proteína e os acompanhamentos
        return proteina + acompanhamentos;
      } else {
        return 0;
      }
    }
    

    finalizarCompra(): void {
      console.log('Compra finalizada. Total: R$', this.calcularTotal());
      console.log('Endereço de entrega:', this.enderecoEntregaFormControl.value);
      console.log('Forma de pagamento:', this.formaPagamento);
      this.router.navigate(['/pagamento']);
    }

    // Método para mostrar o campo de novo endereço
    mostrarCampoNovoEndereco() {
        this.mostrarNovoEndereco = true;
    }

    // Método para lidar com a submissão do novo endereço
    onSubmitNovoEndereco() {
      this.enderecoEntrega = this.enderecoEntregaFormControl.value;
      console.log('Novo endereço salvo:', this.enderecoEntrega);
      this.mostrarNovoEndereco = false;
    }
}
