import { Component} from '@angular/core';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['iron man', 'spider man', 'hulk' ,'lu bu', 'luffy'];
 heroeBorrado:string = "";

  borrarHeroe() {
   this.heroeBorrado = this.heroes.shift()|| '';
   
  }

}