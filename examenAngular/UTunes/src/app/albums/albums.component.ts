import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  
  albumsList !:Array<Album>;
  selectedAlbum ?: Album;

  constructor(private songsService : SongsService) {}

  ngOnInit(): void {
    this.songsService.getAlbums()
      .subscribe({
        next: (data : Album[]) => {
          this.albumsList = data;
        },
        error: (err) =>  console.log(err)
      })
  }

  onClick(album : Album){
    this.selectedAlbum=album;
  }
}
