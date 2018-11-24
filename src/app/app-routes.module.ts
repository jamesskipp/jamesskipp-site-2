import { Routes } from '@angular/router';
import { HistoryComponent } from './body/history/history.component';
import { SkillsComponent } from './body/skills/skills.component';
import { AboutComponent } from './body/about/about.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { ContactComponent } from './body/contact/contact.component';
import { FourOhFourComponent } from './body/four-oh-four/four-oh-four.component';

export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AboutComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: FourOhFourComponent
    }
];