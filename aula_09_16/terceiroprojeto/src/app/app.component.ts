import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terceiroprojeto';

  textoBotao = "Esconder";
  esconder = false;

  pessoas = [
    { 
      nome: "José", 
      idade: 18 
    },
    { 
      nome: "Maria", 
      idade: 22 
    },
    { 
      nome: "Piramide", 
      idade: 39 
    }
  ];

  alterarExibicao() {
    this.textoBotao = this.esconder ? "Esconder" : "Exibir";
    /*
    if(this.textoBotao){
      this.textoBotao = "Exibir";
    } else {
      this.textoBotao = "esconder";
    }
    */
    this.esconder = !this.esconder;
  }
}
