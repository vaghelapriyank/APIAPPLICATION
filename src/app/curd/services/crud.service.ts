import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient: HttpClient) { }

  loadProducts(){
    const url=enviroment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data=>data));
  }
}
