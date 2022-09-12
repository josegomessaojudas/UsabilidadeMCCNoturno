import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprimeiroprojeto';
  meunome = 'jose carmino gomes junior'
  jose = 'é uma variável'
  nome = 'josé'
  idade = 20

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
