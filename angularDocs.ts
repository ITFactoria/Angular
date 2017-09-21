/********************************************************************************* */
//VARIABLE DECLARATIONS
/********************************************************************************* */
//Destructuring Arrays

let teams: string[] = ["America", "Nacional", "Junior"];
let [team1,team2,team3] = teams;
console.log(team1, team2, team3);

//Destructuring Objects

let car= {
	marca: "chevy",
	color: "rojo",
	precio: 13
};

let {marca,color,precio}=car;
console.log(marca,color,precio);


/***********************************************************************************/
//FUNCTIONS
/************************************************************************************/

//Parameters Types
//Required parameters
function ParametersRequired(a:number, b:number, c:number){
	return (a+b+c);
}
console.log("Parameros requeridos: " +ParametersRequired(1,2,3));

//Default parameters
function ParametersDefault(a:number, b:number, c:number=5){
	return (a+b+c);
}
console.log("Parameros x defecto: " +ParametersDefault(1,3));
console.log("Parameros x defecto: " +ParametersDefault(1,2,3));


//Optional parameters
function ParametersOptional(a:number, b:number, c?:number){
	if (c){
		return(a+b+c);
	}
	else{
		return (a+b);
	}
	
}
console.log("Parameros opcionales: " +ParametersOptional(1,2));

//Function Types
//Named function
function NamedAdd(a:number, b:number){
	return a+b;
}
console.log("Named Function: " + NamedAdd(13,9));

//Anonymous function
let AnomymousAdd = function(a:number,b:number){return a+b}
console.log("Anonymous Function: " + AnomymousAdd(3,4));

//Arrow functions
let Add = function(a:number,b:number){return a+b}
console.log("Add Function: " + Add(13,4));

let ArrowAdd = (a:number,b:number) => a+b;
console.log("Arrow Add Function: " + ArrowAdd(10,4));

/******************************************************************************/
//INTERFACES
/*****************************************************************************/

interface cantante{
	nombre: string,
	genero: string,
	exitoso: boolean,
	cantar: () =>string

}

let demanda:cantante ={
	nombre : "kraken",
	genero : "rock",
	exitoso : true,
	cantar:()=>{return "me encanta cantar!!!!"}
}

let fabrica:cantante ={
	nombre : "maluma",
	genero : "regetonto",
	exitoso : true,
	cantar:()=>{return "me encanta llorar!!!!"}
}

let ranchero:cantante ={
	nombre : "aguilar",
	genero : "rabchera",
	exitoso : true,
	cantar:()=>{return "me encanta gritar!!!!"}
}


console.log("demanda cantante" + demanda.nombre + "canta" + demanda.genero + demanda.cantar());
console.log("fabrica cantante" + fabrica.nombre + "canta" + fabrica.genero + fabrica.cantar());
console.log("ranchero cantante" + ranchero.nombre + "canta" + ranchero.genero + ranchero.cantar());

/************************************************************************************************
 * CLASES
 ************************************************************************************************/

class Auto{
	color : string;
	puestos: number;
	motor: string;
	dobletraccion : boolean;

	constructor(color: string, puestos: number, motor: string, dobletraccion : boolean ){
		this.color = color;
		this.puestos = puestos;
		this.motor = motor;
		this.dobletraccion = dobletraccion
		
		
		console.log("interna" + Auto);
	}
}

let camioneta = new Auto("Verde",10,"3600lt",true);
console.log(camioneta);


/************************************************************************************************
 * MODULOS
 ************************************************************************************************/

/*import {ladron, Policia} from "./index"
/*let ramon = new ladron("Ramon",546546);
ramon.imprimir();

import{Policia} from "./policia"
let jairo = new Policia("Jairito",50,23456);
jairo.imprimir();*/


/*************************************************************************************************/
/* ROUTES
/*************************************************************************************************/

/*
1. Crear archivo de rutas: src/app/app.routes.ts
2. Poblar el archivo del paso 1:

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component'

const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

3. Importar el archivo anterior en elarchivo app.modules.ts:

//Routes
import {APP_ROUTING} from './app.routes';

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],


4. Renderizar componente en app.componennt.html: 
<div class="container">
    <router-outlet></router-outlet>
</div>

5. Modificar el navbar para navegar entre las rutas:
<li class="nav-item" routerLinkActive ="active"> //link activo
        <a class="nav-link" [routerLink]="['home']">Home</a> //Navegacion

6. Diseño


**********************************************************************************************/
//SERVICES
/*********************************************************************************************/

1. Crear el archivo src/app/services
2. Creaar el archivo src/app/services/heroes.service.ts
3. Poblar el archivo src/app/services/heroes.service.ts:

import {Injectable} from '@angular/core';

@Injectable()
    export class nameService {

        constructor(){}
    }

4. Incluir el archivo en app.modules.ts en la seccion de servicios:
import {HeroesService} from './services/heroes.service'

providers: [
    HeroesService
  ],

5. Iportar el servicio en el modulo ts donde se va a utilizar

/**************************************************************************************************/
// ENRUTAMIENTOS HACIA OTRAS PAGINAS
/**************************************************************************************************/

1. Mediante un link

1.1. Creacion de componente (pagina)
1.2. Adicion de nueva ruta al app.routes.ts
1.3. Adicion de link en la pagina origen:

<a [routerLink] ="['/heroe',i]" class="btn btn-outline-primary btn-block">See more ....</a>


2. Mediante boton y programacion

2.1 Importar router:
import { Router } from '@angular/router'

2.2. Adicionar enrutador en el constructor:
constructor(private _heroesService : HeroesService, private _router : Router)

2.3 Ajustar funcion
verHeroe(index : number){
    this._router.navigate(['/heroe',index]);


/****************************************************************************************************/
// 
/*****************************************************************************************************/
1. Importar en el componente destino: import { ActivatedRoute} from '@angular/router';
2. Escuchar el parametro de llegada:

constructor( private activatedRoute : ActivatedRoute, private _heroesService : HeroesService) { 
    this. activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id'])
    })

3. Adicionar una funcion al servcio para retornar el dato individual:
getHeroe(index : number){
          return this.heroes [index];
        }
