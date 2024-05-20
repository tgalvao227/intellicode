import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";


interface Item {
  nome: string;
  preco: number;
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
    { nome: 'Patinho Desfiado', preco: 14.50 },
    { nome: 'Patinho Moído', preco: 14.50 },
    { nome: 'Frango Grelhado', preco: 12.50 },
    { nome: 'Ovo Cozido', preco: 3.00 },
    { nome: 'Peixe Assado', preco: 16.00 },
    { nome: 'Peixe Grelhado', preco: 16.00 }
  ];
  

  acompanhamentos: Item[] = [
    { nome: 'Abóbora Assada', preco: 7.30 },
    { nome: 'Abobrinha Refogada Orgânica', preco: 6.40 },
    { nome: 'Arroz 7 Grãos Cozido', preco: 6.40 },
    { nome: 'Arroz à Grega', preco: 6.40 },
    { nome: 'Arroz Branco Cozido', preco: 6.40 },
    { nome: 'Arroz com Brócolis', preco: 7.30 },
    { nome: 'Arroz Integral Cozido', preco: 6.40 }
  ];

  pedido: {
    proteina: Item | null,
    acompanhamentos: Item[]
  } = {
    proteina: null,
    acompanhamentos: []
  };

  observacao: string = '';

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
    // Implementar lógica para finalizar pedido
    console.log('Pedido finalizado:', this.pedido, 'Observação:', this.observacao);
  }
}
