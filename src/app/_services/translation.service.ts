import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
const API_URL=environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class TranslationService implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${API_URL}/translations/${lang}`).pipe(
      map((response: any) => {
        return response.result;
      })
    );
  }
}
