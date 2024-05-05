import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { HomeModule } from './home.module';
import { MatCard } from '@angular/material/card';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

interface Testimonial {
  content: string;
  author: string;
}

interface Promocao {
  nome: string;
  imagem: string;
  preco: string;
  quantidade: number;
}


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, HomeComponent, RegistroComponent, HeaderComponent, FooterComponent]
})

export class HomeComponent implements OnInit {
  isMarmitas: boolean = true;
  sectionTitle: string = 'Delícias prontas para o seu dia a dia'; // Adicionando a propriedade sectionTitle
  testimonials: Testimonial[] = [
    { content: 'As marmitas da BeanFood são deliciosas e me ajudam a manter uma alimentação saudável mesmo nos dias corridos.', author: 'Maria Souza' },
    { content: 'Adoro as opções de dietas da BeanFood! Elas são práticas, saborosas e me ajudaram a perder peso de forma saudável.', author: 'Pedro Santos' },
    { content: 'A BeanFood mudou minha vida! Com suas refeições saudáveis e práticas, consegui adotar hábitos alimentares mais equilibrados.', author: 'Ana Oliveira' }
  ];
  currentTestimonialIndex: number = 0;

  promocoes: Promocao[] = [
    { nome: 'Salmão com molho', imagem: 'assets/salmao.jpg', preco: 'R$ 20,00', quantidade: 1 },
    { nome: 'Bruschetta sem glúten', imagem: 'assets/italia.jpg', preco: 'R$ 15,00', quantidade: 1 },
    { nome: 'Panqueca de carne', imagem: 'assets/panqueca.jpg', preco: 'R$ 18,00', quantidade: 1 },
    { nome: 'Arroz e salmão', imagem: 'assets/peixe.png', preco: 'R$ 25,00', quantidade: 1 },
    { nome: 'Salada com grãos', imagem: 'assets/pratosalada.jpg', preco: 'R$ 22,00', quantidade: 1 },
    { nome: 'Feijoada vegana', imagem: 'assets/feijoada.jpg', preco: 'R$ 30,00', quantidade: 1 },
  ];

  toggleSection() {
    this.isMarmitas = !this.isMarmitas;
    if (this.isMarmitas) {
      this.sectionTitle = 'Delícias prontas para o seu dia a dia';
    } else {
      this.sectionTitle = 'Dietas personalizadas para suas metas de saúde';
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.toggleSection();
    }, 10000); // Alterna as seções a cada 10 segundos
    setInterval(() => {
      this.showNextTestimonial();
    }, 5000); // Alterna os depoimentos a cada 5 segundos
  }

  showNextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }
  
  incrementQuantity(promocao: Promocao) {
    promocao.quantidade++;
  }

  // Função para decrementar a quantidade do item, com verificação para garantir que não seja menor que 1
  decrementQuantity(promocao: Promocao) {
    if (promocao.quantidade > 1) {
      promocao.quantidade--;
    }
  }

  // Função para adicionar o item ao carrinho 
  addToCart(promocao: Promocao) {
    
  }

  

}