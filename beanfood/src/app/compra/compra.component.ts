import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-compra',
    standalone: true,
    templateUrl: './compra.component.html',
    styleUrl: './compra.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class CompraComponent {

}
