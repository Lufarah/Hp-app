import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private studentsUrl = 'https://hp-api.onrender.com/api/characters/students';
  private charactersUrl = 'https://hp-api.onrender.com/api/characters';
  private spellsUrl = 'https://hp-api.onrender.com/api/spells';
  private booksUrl = 'https://potterhead-api.vercel.app/api/books';
  private moviesUrl = 'https://potterhead-api.vercel.app/api/movies';

  constructor(private http: HttpClient) { }

  // Obtener lista de estudiantes
  getStudents(): Observable<any> {
    return this.http.get<any>(this.studentsUrl);
  }

  // Obtener lista de personajes
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.charactersUrl);
  }

  // Obtener lista de hechizos
  getSpells(): Observable<any> {
    return this.http.get<any>(this.spellsUrl);
  }

  // Obtener lista de libros de Harry Potter
  getBooks(): Observable<any> {
    return this.http.get<any>(this.booksUrl);
  }
  // Obtener lista de películas
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.moviesUrl);
  }
}
