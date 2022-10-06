import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SightComponent } from './components/sight/sight.component';
import { SightsComponent } from './components/sights/sights.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RouterModule } from '@angular/router';
import { FamousComponent } from './components/famous/famous.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'famous', component: FamousComponent },
  { path: 'sights', component: SightsComponent },
  { path: 'sights/:name', component: SightComponent },
  { path: 'photos', component: PhotosComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SightComponent,
    SightsComponent,
    PhotosComponent,
    FamousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
