import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe({
      next: (data) => {
        console.log('LFSC:Datos de las películas:' + JSON.stringify(data));  // Verificar los datos
        this.movies = data;  // Asignamos la respuesta
        this.isLoading = false;
      },
      error: (err) => {
        console.error('LFSC: Error al cargar las películas:', err);
        this.isLoading = false;
      }
    });
  }
}
