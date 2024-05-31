import { Injectable } from '@angular/core';

export interface Itens {
  id: number; 
  nome: string;
  imagem: string;
  preco: string;
  quantidade: number;
}

export interface Item {
  id: number; 
  nome: string;
  imagem: string;
  preco: string;
  quantidade: number;
}


export interface PedidoPersonalizado {
  proteina: any;
  acompanhamentos: any[];
}


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: Itens[] = [];
  private promocoes: Itens[] = [
    { nome: 'Carne com legumes assados', imagem: 'assets/carne.jpg', preco: 'R$ 35,00', quantidade: 1, id: 1 },
    { nome: 'Prato vegetariano com abobrinha grelhada', imagem: 'assets/vegetal.jpg', preco: 'R$ 28,00', quantidade: 1, id: 2 },
    { nome: 'Sobremesa de mirtilo com morango', imagem: 'assets/fruta.jpg', preco: 'R$ 20,00', quantidade: 1, id: 3 },
    { nome: 'Salmão com molho', imagem: 'assets/salmao.jpg', preco: 'R$ 20,00', quantidade: 1, id: 4 },
    { nome: 'Bruschetta sem glúten', imagem: 'assets/italia.jpg', preco: 'R$ 15,00', quantidade: 1, id: 5 },
    { nome: 'Panqueca de carne', imagem: 'assets/panqueca.jpg', preco: 'R$ 18,00', quantidade: 1, id: 6 },
    { nome: 'Arroz e salmão', imagem: 'assets/peixe.png', preco: 'R$ 25,00', quantidade: 1, id: 7 },
    { nome: 'Salada com grãos', imagem: 'assets/pratosalada.jpg', preco: 'R$ 22,00', quantidade: 1, id: 8 },
    { nome: 'Feijoada vegana', imagem: 'assets/feijoada.jpg', preco: 'R$ 30,00', quantidade: 1, id: 9},
    { nome: 'Dieta Vegana', imagem: 'assets/vegan.jpg', preco: 'R$ 30,00', quantidade: 1, id: 10},
    { nome: 'Dieta Lowcarb', imagem: 'assets/lowcarbb.png', preco: 'R$ 32,00', quantidade: 1, id: 11},
    { nome: 'Dieta Lowcarb', imagem: 'assets/detox.png', preco: 'R$ 25,00', quantidade: 1, id: 12},
    { nome: 'Kit Mensal', imagem: 'assets/2.png', preco: 'R$ 200,00', quantidade: 1, id: 13},
    { nome: 'Kit trimestral', imagem: 'assets/trimestral.png', preco: 'R$ 500,00', quantidade: 1, id: 14},
    { nome: 'Kit semestral', imagem: 'assets/semestral.png', preco: 'R$ 800,00', quantidade: 1, id: 15},
    { nome: 'Kit anual', imagem: 'assets/anual.png', preco: 'R$ 1000,00', quantidade: 1, id: 16},
  ];
  private pedidoPersonalizado: PedidoPersonalizado | undefined;

  getItensById(id: number): Itens | undefined {
    return this.promocoes.find(p => p.id === id);
  }

  addToCart(Itens: Itens): void {
    const item = this.carrinho.find(p => p.id === Itens.id);
    if (item) {
      item.quantidade++;
    } else {
      this.carrinho.push({ ...Itens });
    }
  }

  getCarrinho(): Itens[] {
    return this.carrinho;
  }

  setPedidoPersonalizado(pedido: PedidoPersonalizado): void {
    this.pedidoPersonalizado = pedido;
  }

  getPedidoPersonalizado(): PedidoPersonalizado | undefined {
    return this.pedidoPersonalizado;
  }

  limparPedidoPersonalizado(): void {
    this.pedidoPersonalizado = undefined;
  }

  limparCarrinho(): void {
    this.carrinho = [];
  }
}
