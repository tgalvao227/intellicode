import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeModule } from './home.module';
import { MatCard } from '@angular/material/card';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

interface Testimonial {
  content: string;
  author: string;
}

export interface Itens{
  id: number;
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
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, HomeComponent, FooterComponent, HeaderComponent]
})

export class HomeComponent implements OnInit {
  userData: any;
  isMarmitas: boolean = true;
  sectionTitle: string = 'Delícias prontas para o seu dia a dia'; 
  testimonials: Testimonial[] = [
    { content: 'As marmitas da BeanFood são deliciosas e me ajudam a manter uma alimentação saudável mesmo nos dias corridos.', author: 'Maria Souza' },
    { content: 'Adoro as opções de dietas da BeanFood! Elas são práticas, saborosas e me ajudaram a perder peso de forma saudável.', author: 'Pedro Santos' },
    { content: 'A BeanFood mudou minha vida! Com suas refeições saudáveis e práticas, consegui adotar hábitos alimentares mais equilibrados.', author: 'Ana Oliveira' }
  ];
  currentTestimonialIndex: number = 0;


  promocoes: Itens[] = [
    { nome: 'Salmão com molho', imagem: 'assets/salmao.jpg', preco: 'R$ 20,00', quantidade: 1, id: 4 },
    { nome: 'Bruschetta sem glúten', imagem: 'assets/italia.jpg', preco: 'R$ 15,00', quantidade: 1, id: 5 },
    { nome: 'Panqueca de carne', imagem: 'assets/panqueca.jpg', preco: 'R$ 18,00', quantidade: 1, id: 6 },
    { nome: 'Arroz e salmão', imagem: 'assets/peixe.png', preco: 'R$ 25,00', quantidade: 1, id: 7 },
    { nome: 'Salada com grãos', imagem: 'assets/pratosalada.jpg', preco: 'R$ 22,00', quantidade: 1, id: 8 },
    { nome: 'Feijoada vegana', imagem: 'assets/feijoada.jpg', preco: 'R$ 30,00', quantidade: 1, id: 9},
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

    this.userData = this.getUserData();

    setInterval(() => {
      this.toggleSection();
    }, 10000); // Alterna as seções a cada 10 segundos
    setInterval(() => {
      this.showNextTestimonial();
    }, 5000); // Alterna os depoimentos a cada 5 segundos
  }

  getUserData() {
    // Primeiro, obtenha a string JSON armazenada em 'data'
    const dataString = localStorage.getItem('data');
    
    // Parseie a string JSON para um objeto
    const dataObj = dataString ? JSON.parse(dataString) : null;

    console.log(dataObj);
    
    return dataObj
  }

  showNextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }
  
  incrementQuantity(itens: Itens) {
    itens.quantidade++;
  }

  // Função para decrementar a quantidade do item, com verificação para garantir que não seja menor que 1
  decrementQuantity(itens: Itens) {
    if (itens.quantidade > 1) {
      itens.quantidade--;
    }
  }

  // Função para adicionar o item ao carrinho 
  addToCart(itens: Itens) {
    
  }

  

}