import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { close,closeCircle, pin} from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  constructor() {

    
    }


  filtrarItems(event: any){

    addIcons({ close, closeCircle, pin});


  }
}
