import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.page.html',
  styleUrls: ['./spell-list.page.scss'],
})
export class SpellListPage implements OnInit {
  spells: any[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSpells().subscribe({
      next: (data) => {
        this.spells = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar hechizos:', err);
        this.isLoading = false;
      }
    });
  }
}
