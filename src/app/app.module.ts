import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HistoryComponent } from './body/history/history.component';
import { AppRoutes } from './app-routes.module';
import { SkillsComponent } from './body/skills/skills.component';
import { AboutComponent } from './body/about/about.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { ContactComponent } from './body/contact/contact.component';
import { FourOhFourComponent } from './body/four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HistoryComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      {
          enableTracing: false
      }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
