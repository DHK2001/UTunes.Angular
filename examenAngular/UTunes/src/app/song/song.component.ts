import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SongsService } from '../services/songs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Album } from '../models/album';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() songs?: Song[];

  album?: Album;
  precioTotal?: number;
  totalSongs?: number;
  searchText = '';

  constructor(private route: ActivatedRoute, private songsService: SongsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.songsService.getSongsByAlbums(id).subscribe({
        next: (data: Song[]) => {
          this.songs = data;
          this.precioTotal = 0;
          this.totalSongs = 0;
          for (let song of this.songs) {
            this.precioTotal += song.price;
            this.totalSongs++;
          }
        },
        error: (err) => console.log(err)
      });
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.songsService.getAlbum(id).subscribe({
        next: (data: Album) => (this.album = data),
        error: (err) => console.log(err)
      });
    });
  }

  get filteredSongs(): Song[] {
    return this.songs?.filter(
      (song) =>
        song.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        song.artist.toLowerCase().includes(this.searchText.toLowerCase())
    )!;
  }

  megusta() {
    this.album!.likes++;
  }
  
  nomegusta() {
    if(this.album!.likes==0){
      return;
    }
    this.album!.likes--;
  }
}


