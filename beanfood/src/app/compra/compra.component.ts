import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Itens } from '../home/home.component';
import { CarrinhoService, Item, PedidoPersonalizado } from '../carrinho/carrinho.service';
import { CompraService } from '../compra/compra.service'; // Importe o novo serviço

@Component({
    selector: 'app-compra',
    standalone: true,
    templateUrl: './compra.component.html',
    styleUrls: ['./compra.component.scss'],
    imports: [HeaderComponent, FooterComponent, RouterLink, CommonModule]
})
export class CompraComponent implements OnInit {
  itens: Itens | undefined;
  pedidoPersonalizado: PedidoPersonalizado | undefined;

  constructor(
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private compraService: CompraService 
    
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itens = this.carrinhoService.getItensById(id);
    this.pedidoPersonalizado = this.carrinhoService.getPedidoPersonalizado();
    console.log(this.pedidoPersonalizado)
  }


  finalizarCompra(): void {
    if (this.itens) {
      this.compraService.setItemSelecionado(this.itens);
      this.carrinhoService.addToCart(this.itens);
    }
  }
}
