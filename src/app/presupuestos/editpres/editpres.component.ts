import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Presupuestos } from 'src/app/Model/presupuestos.model';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {
  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;

  constructor(
    private pf: FormBuilder,
    private presupuestoService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(parametros => {
      this.id = parametros.id;
      this.presupuestoService
        .getPresupuesto(this.id)
        .subscribe(presupuesto => {
          console.log(presupuesto);
          this.presupuesto = presupuesto;
        });
    });
    console.log(this.presupuesto);
  }

  ngOnInit() {
    // console.log('ssd6+4564');
    this.presupuestoForm = new FormGroup({
      proveedor: new FormControl ('', Validators.required),
      fecha: new FormControl('', Validators.required),
      concepto: new FormControl('', [Validators.required, Validators.minLength(10)]),
      base: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      iva: new FormControl(this.iva),
      total: new FormControl(this.total)
    });
    this.onChanges();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + this.base * this.tipo;
    });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.putPresupuesto( this.presupuesto, this.id )
    .subscribe(newpre => {
    this.router.navigate(['/presupuestos'])
    })
    console.log(this.presupuestoForm);
    }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }
}
