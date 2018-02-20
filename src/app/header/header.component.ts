import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Output() changeSection: EventEmitter<number> = new EventEmitter<number>()
}
