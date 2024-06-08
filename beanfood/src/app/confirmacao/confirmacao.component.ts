import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss'],
})
export class ConfirmacaoComponent {
  status: string = ''; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.status = params['status'] || ''; // Definindo o status como uma string vazia se não for fornecido nos parâmetros de consulta
    });
  }
}
