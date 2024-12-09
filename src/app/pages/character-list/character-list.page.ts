import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {
  characters: any[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
        this.isLoading = false;
      }
    });
  }
}
