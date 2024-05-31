import { Injectable } from '@angular/core';
import { Itens } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private itemSelecionado: Itens | null = null;

  setItemSelecionado(item: Itens) {
    this.itemSelecionado = item;
  }

  getItemSelecionado(): Itens | null {
    return this.itemSelecionado;
  }
}
