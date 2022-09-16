import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoprojeto';
  nome = "José";
  idade = 20

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }


  alterarNome(nome) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    }

  adicionar(nomeInput) {
    console.log("Adicionando...");
  }
}
