import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

baseUrl:string='https://api.themoviedb.org/3/'
apiKey='cdf53c51ba8de3ad35b91437f974f199'

getMovies(endpoint:any,page:number):Observable<any>{
  /* return this._httpClient.get(`${this.baseUrl}${endpoint}?api_key=${this.apiKey}&page=1,2,3`)*/

 return this._httpClient.get(`${this.baseUrl}${endpoint}?api_key=${this.apiKey}&page=${page}`)





 }


 getMovieDetails(movieId:number):Observable<any>{
 return this._httpClient.get(`${this.baseUrl}movie/${movieId}?api_key=${this.apiKey}`)
}


getTrendingMovies(pageNum:number):Observable<any>{

  return this._httpClient.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${this.apiKey}&page=${pageNum}`)
}

getMovieCasting(movieId:number):Observable<any>{
  return this._httpClient.get(`${this.baseUrl}movie/${movieId}/credits?api_key=${this.apiKey}`)
}



}


