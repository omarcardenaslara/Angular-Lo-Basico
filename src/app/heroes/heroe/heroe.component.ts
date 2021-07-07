
import { Component } from "@angular/core";
import { $ } from "protractor";



@Component( {
    selector   : 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string =  'spider man';
    edad  : number = 26

    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre(): string {
        return ` ${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'iron man';
    }

    cambiaEdad(): void {
        this.edad = 66;
    }






}
