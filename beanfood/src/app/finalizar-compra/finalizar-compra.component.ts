import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-finalizar-compra',
    standalone: true,
    templateUrl: './finalizar-compra.component.html',
    styleUrls: ['./finalizar-compra.component.scss'],
    imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule]
})
export class FinalizarCompraComponent {
    formaPagamento: string = 'cartao'; // Definindo a forma de pagamento padrão como cartão
    enderecoEntregaFormControl: FormControl = new FormControl('');
    mostrarNovoEndereco: boolean = false;

    // Função para lidar com alterações na forma de pagamento
    onFormaPagamentoChange(event: any) {
        this.formaPagamento = event.target.value;
    }

    // Método para mostrar o campo de novo endereço
    mostrarCampoNovoEndereco() {
        this.mostrarNovoEndereco = true;
    }

    // Método para lidar com a submissão do novo endereço
    onSubmitNovoEndereco() {
        // Aqui você pode adicionar a lógica para salvar o novo endereço
        console.log('Novo endereço salvo:', this.enderecoEntregaFormControl.value);
        // E depois de salvar, você pode ocultar o campo do novo endereço
        this.mostrarNovoEndereco = false;
    }
}
