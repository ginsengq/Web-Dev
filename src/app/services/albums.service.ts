import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.albumsUrl}/${id}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    console.log('Запрос фотографий для альбома ID:', albumId);
    return this.http.get<any[]>(`${this.photosUrl}?albumId=${albumId}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put<any>(`${this.albumsUrl}/${id}`, { title: newTitle });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.albumsUrl}/${id}`);
  }
}