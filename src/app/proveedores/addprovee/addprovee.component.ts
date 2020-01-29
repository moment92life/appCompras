import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})


export class AddproveeComponent implements OnInit {

  @ViewChild('formpro', { static: false }) formpro: NgForm;

  provincias: string[] = [
    'Ate',
    'Barranco',
    'Bellavista',
    'Breña',
    'Callao',
    'Carmen de la Legua',
    'Comas',
    'Chorrillos',
    'El Agustino',
    'Independencia',
    'Jesús María',
    'La Molina',
    'La Perla',
    'La Punta',
    'La Victoria',
    'Lince',
    'Los Olivos',
    'Magdalena del Mar',
    'Miraflores',
    'Pueblo Libre',
    'Puente Piedra',
    'Rimac',
    'Santa Anita',
    'San Borja',
    'San Isidro',
    'San Juan de Miraflores',
    'San Luis',
    'San Martin de Porres',
    'San Miguel',
    'San Juan de Lurigancho',
    'Santa Rosa',
    'Santiago de Surco',
    'Surquillo',
    'Ventanilla',
    'Villa El Salvador',
    'Villa María del Triunfo'
  ];
  
  proveedor: any;
  constructor() {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      email: '',
      contacto: ''
    }
  }

  onSubmit() {

    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    this.formpro.reset();
  }
  ngOnInit() {
  }




}
