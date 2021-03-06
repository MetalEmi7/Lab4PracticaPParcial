import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {

  form={
    id:"",
    nombre:"",
    password:"",
    mail:"",
    sexo:"",
  }

  constructor(private datos:PersonaService) { }

  baja()
  {
    console.log("Metodo baja() - ");
    this.datos.delete(this.form)
    .then(data=>{
      console.log(data);
      alert("Persona Eliminada");
    })
    .catch(error=> console.log(error))
  }

  ngOnInit() {
  }

}
