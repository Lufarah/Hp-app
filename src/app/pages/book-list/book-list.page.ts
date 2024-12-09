import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  books: any[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe({
      next: (data) => {
        console.log('Datos de los libros:', data);  // Ver los datos en consola
        this.books = data;  // Asignamos los datos a la variable 'books'
        this.isLoading = false;  // Indicamos que la carga terminó
      },
      error: (err) => {
        console.error('Error al cargar los libros:', err);  // Si hay error, lo mostramos en consola
        this.isLoading = false;
      }
    });
  }
}
