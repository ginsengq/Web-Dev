import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  imports: [CommonModule],
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  photos: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
      console.log('Альбомы загружены:', data);
    });
  
    this.albumsService.getPhotosByAlbumId(1).subscribe(
      (data) => {
        console.log('Пришли фото:', data);
        this.photos = data; // Заполняем массив фото
      },
      (error) => {
        console.error('Ошибка загрузки фото:', error);
      }
    );
  }
  
  onDelete(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }

  onViewDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
