import { Component, OnInit, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumList = signal<Album[]>([]);
  isLoading = signal(true);

  constructor(private api: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading.set(true);

    this.api.getAlbums().subscribe({
      next: (res) => {
        this.albumList.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.albumList.set([]);
        this.isLoading.set(false);
      }
    });
  }

  removeAlbum(id: number): void {
    const ok = confirm('Delete this album?');

    if (!ok) {
      return;
    }

    this.api.deleteAlbum(id).subscribe({
      next: () => {
        this.albumList.update(items => items.filter(item => item.id !== id));
      },
      error: () => {}
    });
  }
}