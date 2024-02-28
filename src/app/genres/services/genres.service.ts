import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  apiKey='cdf53c51ba8de3ad35b91437f974f199'
  baseUrl:string='https://api.themoviedb.org/3/'


  constructor(private _httpClient:HttpClient) { }

  getAllGenres(): Observable<any> {
    const moviesGenresRequest = this._httpClient.get<any>(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`);
    const tvGenresRequest = this._httpClient.get<any>(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}`);

    return forkJoin([moviesGenresRequest, tvGenresRequest]).pipe(map(([moviesGenres, tvGenres]) => {
        const combinedGenres = [...moviesGenres.genres, ...tvGenres.genres];
        const uniqueGenres = combinedGenres.filter((genre, index, self) =>
        index === self.findIndex((g) => g.id === genre.id)
                );
        return { genres: uniqueGenres };
      })
    );
  }

  getGenreMovies(genreId:number, page:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}&page=${page}`)
  }
  getGenreTvs(genreId:number, page:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&with_genres=${genreId}&page=${page}`)
  }

}
