import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '../model/local';


@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private baseUrl = 'http://localhost:8082/locals'; 

  constructor(private http: HttpClient) { }

  addLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(`${this.baseUrl}/add`, local);
  }

  updateLocal(local: Local): Observable<Local> {
    return this.http.put<Local>(`${this.baseUrl}/update`, local);
  }

  deleteLocal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.baseUrl}/list`);
  }

  findAllByCategorieId(categorieId: number): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.baseUrl}/byCategorie/${categorieId}`);
  }

  findAllByTypeLocaleId(typeLocalId: number): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.baseUrl}/byTypeLocal/${typeLocalId}`);
  }

  findAllByProprietaireId(proprietaireId: number): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.baseUrl}/byProprietaire/${proprietaireId}`);
  }

  findAllByRegionId(regionId: number): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.baseUrl}/byRegion/${regionId}`);
  }

  findLocalByNom(nom: string): Observable<Local> {
    return this.http.get<Local>(`${this.baseUrl}/byNom/${nom}`);
  }

  findLocalByAdresse(adresse: string): Observable<Local> {
    return this.http.get<Local>(`${this.baseUrl}/byAdresse/${adresse}`);
  }
}
