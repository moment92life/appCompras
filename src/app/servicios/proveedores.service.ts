import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any =[
    {
      nombre :'Telefonica',
      cif:'123456789',
      direccion:'Lima',
      telefono:'987654321',
      email:'telefonica@telefonica.com',
      contacto:'Juan Solis'
    },
    {
      nombre :'Motorola',
      cif:'123456789',
      direccion:'Chile',
      telefono:'987654321',
      email:'moto@moto.com',
      contacto:'Juan Solis'
    }
  ]
 getProveedores(){
    return this.proveedores;
  }

  constructor() { }

 
}
