import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';
import { PictureComponent } from './components/picture/picture.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { NavComponent } from './components/nav/nav.component';
import { ImgService } from './services/img.service';

const routs = [
  { path: '', component: BioComponent },
  { path: 'pictures', component: PicturesComponent },
  {
    path: 'famous', component: PictureComponent, data: {
      name: "The Creation of Adam",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Creaci%C3%B3n_de_Ad%C3%A1m.jpg/300px-Creaci%C3%B3n_de_Ad%C3%A1m.jpg"
    }
  },
  { path: 'pictures/:name', component: PictureComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    PictureComponent,
    PicturesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs)
  ],
  providers: [ImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
