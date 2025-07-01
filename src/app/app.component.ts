import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe para *ngFor, *ngIf
import { UserService, User } from './user.service'; // Importe UserService e a interface User

@Component({
  selector: 'app-root',
  standalone: true, // Confirma que é um componente standalone
  imports: [
    CommonModule // Necessário para usar diretivas estruturais como *ngFor e *ngIf no template
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Minha Lista de Usuários';
  users: User[] = []; // Array para armazenar os usuários que virão da API

  constructor(private userService: UserService) { } // <-- Injeta UserService

  ngOnInit(): void {
    // Este método é executado uma vez, após o Angular inicializar o componente.
    // É o local ideal para buscar dados iniciais.
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data; // Quando os dados chegam com sucesso, armazene-os no array 'users'
      },
      (error) => {
        console.error('Erro ao buscar usuários:', error); // Em caso de erro, loga no console
      }
    );
  }
}