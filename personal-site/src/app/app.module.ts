import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ExperienceComponent } from './experience/experience.component'
import { ProjectsComponent } from './projects/projects.component'
import { ArnoldTechComponent } from './arnoldtech/arnoldtech.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ArnoldTechComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'arnoldtech', component: ArnoldTechComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavComponent, FooterComponent, HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ArnoldTechComponent]
})
export class AppModule { }
