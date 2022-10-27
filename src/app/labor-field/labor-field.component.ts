import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-field',
  templateUrl: './labor-field.component.html',
  styleUrls: ['./labor-field.component.css']
})
export class LaborFieldComponent implements OnInit {

  public image:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.image = "https://cursodeinstalador.com/wp-content/uploads/2021/12/technology-ga987b62db_640.webp";
  }

}
