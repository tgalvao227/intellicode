import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrl: './sobre.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class SobreComponent {

}
