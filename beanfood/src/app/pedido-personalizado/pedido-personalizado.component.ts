import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarrinhoService, PedidoPersonalizado, Itens } from '../carrinho/carrinho.service';
import { Router } from '@angular/router';

interface Item {
  nome: string;
  preco: number;
  imagem: string;
}

@Component({
    selector: 'app-pedido-personalizado',
    templateUrl: './pedido-personalizado.component.html',
    standalone: true,
    styleUrls: ['./pedido-personalizado.component.scss'],
    imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class PedidoPersonalizadoComponent {
  proteinas: Item[] = [
    { nome: 'Patinho Desfiado', preco: 14.50, imagem: 'assets/patinho_desfiado.jpg' },
    { nome: 'Patinho Moído', preco: 14.50, imagem: 'assets/patinho_moido.jpg' },
    { nome: 'Frango Grelhado', preco: 12.50, imagem: 'assets/frango-grelhado.jpeg' },
    { nome: 'Ovo Cozido', preco: 3.00, imagem: 'assets/ovo-cozido.jpg' },
    { nome: 'Peixe Assado', preco: 16.00, imagem: 'assets/peixe-assado.jpg' },
    { nome: 'Peixe Grelhado', preco: 16.00, imagem: 'assets/peixe-grelhado.jpg' }
  ];
  
  acompanhamentos: Item[] = [
    { nome: 'Abóbora Assada', preco: 7.30, imagem: 'assets/abobora.jpg' },
    { nome: 'Abobrinha Refogada Orgânica', preco: 6.40, imagem: 'assets/abobrinha-refogada.jpeg' },
    { nome: 'Arroz 7 Grãos Cozido', preco: 6.40, imagem: 'assets/arroz-7.png' },
    { nome: 'Arroz à Grega', preco: 6.40, imagem: 'assets/arroz-a-grega-02.jpg' },
    { nome: 'Arroz Branco Cozido', preco: 6.40, imagem: 'assets/arroz-branco.jpg' },
    { nome: 'Arroz com Brócolis', preco: 7.30, imagem: 'assets/arroz-brocolis.jpg' },
    { nome: 'Arroz Integral Cozido', preco: 6.40, imagem: 'assets/arroz-integral.jpg' }
  ];


  pedido: PedidoPersonalizado = {
    proteina: null,
    acompanhamentos: []
};

  observacao: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  selecionarProteina(item: Item) {
    this.pedido.proteina = item;
  }

  selecionarAcompanhamento(item: Item) {
    if (!this.itemSelecionado(item)) {
      this.pedido.acompanhamentos.push(item);
    } else {
      const index = this.pedido.acompanhamentos.findIndex(acomp => acomp.nome === item.nome);
      this.pedido.acompanhamentos.splice(index, 1);
    }
  }

  itemSelecionado(item: Item): boolean {
    return this.pedido.acompanhamentos.some(acomp => acomp.nome === item.nome);
  }

  calcularTotal(): number {
    let total = this.pedido.proteina ? this.pedido.proteina.preco : 0;
    total += this.pedido.acompanhamentos.reduce((acc, item) => acc + item.preco, 0);
    return total;
  }

  finalizarPedido() {
    const pedidoPersonalizado: PedidoPersonalizado = {
      proteina: this.pedido.proteina,
      acompanhamentos: this.pedido.acompanhamentos
    };
    this.carrinhoService.setPedidoPersonalizado(pedidoPersonalizado);
    console.log(pedidoPersonalizado)
    console.log('Pedido finalizado:', pedidoPersonalizado, 'Observação:', this.observacao);
    this.router.navigate(['/finalizar-compra']);
  }
}
