import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl:string='https://api.themoviedb.org/3/person/'
  apiKey='cdf53c51ba8de3ad35b91437f974f199'

  constructor(private _httpClient:HttpClient) { }

  getPeron(personId:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${personId}?api_key=${this.apiKey}`)
  }

  getPersonImg(personId:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${personId}/images?api_key=${this.apiKey}`)
  }

  getPersonMovies(peronId:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${peronId}/movie_credits?api_key=${this.apiKey}`)
  }
  getPersonTv(peronId:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${peronId}/tv_credits?api_key=${this.apiKey}`)
  }
}
