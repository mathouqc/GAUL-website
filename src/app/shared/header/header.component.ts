import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title = "";
  @Input() subTitle = "";
  @Input() backgroundImg = "";
  @Input() logoUlaval = false;

}
