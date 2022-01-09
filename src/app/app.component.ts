import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  btn_status:string="non ancora cliccato"
  txt_casella:string

  onBottoneClick(){
    console.log("Hai cliccato sul bottone")
    this.btn_status="Hai già clicccato sul bottone"
  }

  onInputUpdate(e:Event){
    this.txt_casella=(<HTMLInputElement>e.target).value 
  }
}
