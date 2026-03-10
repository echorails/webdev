import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photosList: Photo[] = [];
  currentAlbumId = 0;
  isLoading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private albumApi: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentAlbumId = id ? +id : 0;
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.isLoading = true;

    this.albumApi.getAlbumPhotos(this.currentAlbumId).subscribe({
      next: (res) => {
        this.photosList = res;
        this.isLoading = false;
      },
      error: () => {
        this.photosList = [];
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  onImageError(e: Event): void {
    const element = e.target as HTMLImageElement;
    element.src = 'https://placehold.co/150x150?text=No+Image';
  }
}