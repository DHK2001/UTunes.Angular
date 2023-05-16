import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private httpClient : HttpClient) { }

  getAlbums() : Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${environment.baseApiUrl}/Albums`);
  }

  getSongsByAlbums(id : string | null) : Observable<Song[]>{
    console.log(`${environment.baseApiUrl}/Song/albums/${id}/Song`);
    return this.httpClient.get<Song[]>(`${environment.baseApiUrl}/Song/albums/${id}/Song`);
  }

  getAlbum(id : string | null) : Observable<Album>{
    return this.httpClient.get<Album>(`${environment.baseApiUrl}/Albums/${id}`);
  }
}
