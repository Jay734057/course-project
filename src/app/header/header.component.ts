import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() switch = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit() {
  }

  Switch(feature:string){
    this.switch.emit(feature);
  }
  
}
