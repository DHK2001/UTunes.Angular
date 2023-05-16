import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {path: 'Utunes', component: AlbumsComponent},
  {path: 'Utunes/:id', component: SongComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
