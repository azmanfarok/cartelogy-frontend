import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private globalUrl = 'https://cartelogy.mentadak.com/company/';

  constructor(private http: HttpClient,) { }

  getCompany (id1, id2) {
    return this.http.get<any>(this.globalUrl + 'getCompanyByMofNo/' + id1 + '/' + id2, httpOptions).pipe(
      tap()
    );
  }

  getOCDS () {
    return this.http.get<any>(this.globalUrl + 'getOCDS', httpOptions).pipe(
      tap()
    );
  }

}
