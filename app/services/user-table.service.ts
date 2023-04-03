import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {
  private apiUrl = 'https://randomuser.me/api/';
  public filters = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}
  isLocation(arr: string[]): string[] {
    if (arr.includes('street') && arr.includes('city')) {
      arr.push('location');
    }
      return arr;
  }
  getUsers(): Observable<any> {
    const exc: string = this.isLocation(Object.keys(this.filters.value).filter((key) => !this.filters.value[key])).join(',');

    const params = {
      seed: 'fixed_seed',
      results: 100,
      page: Math.ceil(0 / 25) + 1,
      ...(exc.length ? { exc: exc } : ''),
    };

    return this.http.get(this.apiUrl, { params }).pipe(
      map((response: any) => ({
        data: response.results,
        totalCount: response.info.results,
      })),
      catchError((err) => {
        console.error('Loading data error', err);
        return of({
          data: [],
          totalCount: 0,
        });
      })
    );
  }
}
