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
  esconderCaixa = true;
  numero: number | undefined;
  produto: any;

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  alterarNome(nome: { target: { value: string; }; }) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }

  adicionar(nomeInput: { value: any; }) {
    this.nome = nomeInput.value;
    this.esconderCaixa = nomeInput.value.length <= 0;
  }

  escolher() {
    this.numero = Math.floor(Math.random() * 100) + 1;
  }

  alterarProduto(produtoInput: { value: string; }) {
    this.produto = 'Novo produto: ' + produtoInput.value;
  }
}
