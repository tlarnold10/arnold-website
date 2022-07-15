import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'experience', component: ExperienceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavComponent, FooterComponent, HomeComponent, AboutComponent, ExperienceComponent]
})
export class AppModule { }
