import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../home/home.component';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ehValido } from '../validador-credito/validador-credito.component';
import { RouterLink } from '@angular/router';
import { CompraService } from '../compra/compra.service';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class PagamentoComponent {
  itens: Itens | undefined;
  formaPagamento: string = 'card';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  nameOnCard: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private compraService: CompraService 
  ) {}

  onPaymentMethodChange(paymentMethod: string) {
    this.formaPagamento = paymentMethod;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itens = this.carrinhoService.getItensById(id);
  }

  calcularValorProdutos(): number {
    // Obtenha os itens do carrinho
    const itens = this.carrinhoService.getCarrinho();
    // Calcule o valor total dos produtos
    console.log(itens)
    return itens.reduce((total, item) => total + (parseFloat(item.preco.replace('R$', '').replace(',', '.')) * item.quantidade), 0);
  }

  calcularTotal(): number {
    return this.calcularValorProdutos() + 7.00;
  }

  realizarPagamento() {
    if (this.formaPagamento === 'card' && this.isDadosCartaoValidos()) {
      this.router.navigate(['/confirmacao'], { queryParams: { status: 'confirmado' } });
    } else {
      this.router.navigate(['/confirmacao'], { queryParams: { status: 'aguardando_pagamento' } });
    }
  }

  private isDadosCartaoValidos(): boolean {
    return this.ehValido(this.cardNumber) &&
           this.ehValidadeValida(this.expiryDate) &&
           this.ehCvvValido(this.cvv) &&
           this.nameOnCard.trim() !== '';
  }

  ehValido(cardNumber: string): boolean {
    return ehValido(cardNumber);
  }

  ehValidadeValida(expiryDate: string): boolean {
    //formato MM/AA
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test(expiryDate)) {
      return false;
    }
    const [month, year] = expiryDate.split('/').map(x => parseInt(x, 10));
    const currentYear = new Date().getFullYear() % 100; // últimos 2 dígitos do ano atual
    const currentMonth = new Date().getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  }

  ehCvvValido(cvv: string): boolean {
    // CVV deve ter 3 ou 4 dígitos
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
  }

  camposPreenchidos(): boolean {
    return this.formaPagamento !== 'card' || this.isDadosCartaoValidos();
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
