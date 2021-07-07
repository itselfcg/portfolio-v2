import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudyComponent } from './case-study/case-study.component';

const routes: Routes = [
  { path: 'work', component: WorkComponent, data: {animation: 'WorkPage'} },
  { path: 'about', component: AboutComponent,data: {animation: 'AboutPage'} },
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
  { path: 'case-study/:id', component: CaseStudyComponent, data: {animation: 'CaseStudyPage'} },
  { path: '"**', component: HomeComponent, data: {animation: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
