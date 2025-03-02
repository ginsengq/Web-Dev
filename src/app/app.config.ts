// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app.routes'; 
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { AlbumsComponent } from './albums/albums.component';
// import { AlbumDetailComponent } from './album-detail/album-detail.component';
// import { AlbumPhotosComponent } from './album-photos/album-photos.component';
// import { HeaderComponent } from './header/header.component'; 


// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AboutComponent,
//     AlbumsComponent,
//     AlbumDetailComponent,
//     AlbumPhotosComponent,
//     HeaderComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule, 
//     AppRoutingModule, 
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));
