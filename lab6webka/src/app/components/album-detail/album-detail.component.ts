import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss'],  
})
export class AlbumInfoComponent implements OnInit {
  selectedAlbum: Album | null = null;
  isLoading = true;
  currentTitle = '';

  private albumId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigation: Router,
    private dataService: AlbumService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAlbumData();
  }

  private loadAlbumData(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.albumId = Number(idParam);

    if (!this.albumId || isNaN(this.albumId)) {
      console.warn('Invalid album ID');
      this.isLoading = false;
      this.changeDetector.markForCheck();
      return;
    }

    this.dataService.getAlbum(this.albumId).subscribe({
      next: (albumData) => {
        this.selectedAlbum = albumData;
        this.currentTitle = albumData.title || '';
        this.isLoading = false;
        this.changeDetector.markForCheck();
      },
      error: (error) => {
        console.error('Не удалось загрузить альбом:', error);
        this.isLoading = false;
        this.changeDetector.markForCheck();
      }
    });
  }

  saveChanges(): void {
    if (!this.selectedAlbum || !this.currentTitle.trim()) {
      return;
    }

    const updatedAlbum: Album = {
      ...this.selectedAlbum,
      title: this.currentTitle.trim()
    };

    this.dataService.updateAlbum(updatedAlbum).subscribe({
      next: (updated) => {
        this.selectedAlbum = updated;
        this.currentTitle = updated.title;
        this.changeDetector.markForCheck();
        console.log('Альбом успешно обновлён');
      },
      error: (err) => {
        console.error('Ошибка при сохранении:', err);
      }
    });
  }

  navigateBack(): void {
    this.navigation.navigate(['../albums'], { relativeTo: this.activatedRoute });
  }

  viewAlbumPhotos(): void {
    if (this.selectedAlbum) {
      this.navigation.navigate(['photos'], { relativeTo: this.activatedRoute });
    }
  }
}