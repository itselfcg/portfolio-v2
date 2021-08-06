import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../_models/language.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl + '/languages';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private language: Language[] = [];
  private languageUpdated = new Subject<Language[]>();

  constructor(private http: HttpClient) {}

  getLanguageUpdateListener() {
    return this.languageUpdated.asObservable();
  }


  getByID(id: string) {
    return this.http.get<{ message: string; language: Language }>(
      API_URL + '/' + id
    );
  }


  getAll() {
    return this.http
      .get<{ languages: Language[] }>(API_URL)
      .pipe(
        map((projectData: any) => {
          return projectData.languages;
        })
      )
      .subscribe((languages) => {
        this.language = languages;
        this.languageUpdated.next([...this.language]);
      });
  }

}
