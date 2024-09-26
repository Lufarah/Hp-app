import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Harry() {

    this.router.navigate(['harry-potter']);
  }

}
