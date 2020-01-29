import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Presupuestos } from '../Model/presupuestos.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://pfappcompras.firebaseio.com/presupuestos.json';
  preURL = 'https://pfappcompras.firebaseio.com/presupuestos';

  constructor(private http: HttpClient) { }

  postPresupuesto(presupuesto: any) {
    return this.http.post(this.presURL, presupuesto);
  }

  getPresupuestos() {
    return this.http.get(this.presURL).pipe(map(res => {
      const presupuestos: Presupuestos[] = [];

      Object.keys(res).forEach(key => {

        const presupuesto: Presupuestos = res[key];

        presupuesto.id = key;

        presupuestos.push(presupuesto);
      });

      return presupuestos;
    })

    );
  }
  getPresupuesto(id) {
    const url = this.preURL + `/${id}.json`;
    console.log(id);
    return this.http.get<Presupuestos>(url);
  }

  putPresupuesto(presupuesto: Presupuestos, id: string) {
    const url = this.preURL + `/${id}.json`;
    return this.http.put(url, presupuesto);
  }

  delPresupuesto( id: string ) {
    const url = `${ this.preURL }/${ id }.json`;
    return this.http.delete(url);
    }
}

