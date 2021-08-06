import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LabelFilterPipe } from './_pipes/label-pipe.component';

import { SortFilterPipe } from './_pipes/sort-pipe.component';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { LoadingComponent } from './states/loading.component';
import { NavbarComponent } from './header/navbar.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './_services/translation.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LabelFilterPipe,
    SortFilterPipe,
    CaseStudyComponent,
    LoadingComponent,
    NavbarComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
       // useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
