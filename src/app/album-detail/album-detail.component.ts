import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(id).subscribe((data) => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  onSave(): void {
    this.albumsService
      .updateAlbumTitle(this.album.id, this.newTitle)
      .subscribe(() => {
        this.album.title = this.newTitle;
      });
  }

  onReturn(): void {
    this.router.navigate(['/albums']);
  }

  onViewPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}