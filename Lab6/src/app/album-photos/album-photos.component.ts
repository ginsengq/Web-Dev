import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  imports: [CommonModule],
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  handleImgError(event: Event, photo: any) {
    console.log('Ошибка загрузки:', photo);
    photo.thumbnailUrl = 'https://picsum.photos/150';
  }
  
  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!; // Получаем ID альбома
    console.log('Album ID:', albumId); // Проверяем, что ID корректный
  
    this.albumsService.getPhotosByAlbumId(albumId).subscribe((data) => {
      console.log('Пришли фото:', data);
      this.photos = data;
    });
  }

  onReturn(): void {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}