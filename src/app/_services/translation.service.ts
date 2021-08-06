import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TranslationService implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/translations/${lang}`).pipe(
      map((response: any) => {
        return response.result;
      })
    );
  }
}
