import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from '../contracts/response.contract';
import { MarvelEvent } from '../contracts/marvel-event.contract';
import * as md5 from 'md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private readonly PUB_KEY = '';
  private readonly PRIV_KEY = '';
  private readonly API_BASE_URL = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient) { }

  public getEvent(id: number): Observable<MarvelEvent> {
    const URL = this.buildURL('events/'.concat(id.toString()));

    return this.http.get<Response>(URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map(response => {
        return response.data.results[0] as MarvelEvent;
      })
    );
  }

  public getEvents(): Observable<MarvelEvent[]> {
    const URL = this.buildURL('events');
    return this.http.get<Response>(URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map(response => {
        return response.data.results as MarvelEvent[];
      })
    );
  }

  public buildURL(path: string): string {
    const timestamp = this.getCurrentTimestamp().toString();

    return this.API_BASE_URL.concat(path)
      .concat('?apikey=').concat(this.PUB_KEY)
      .concat('&ts=').concat(timestamp)
      .concat('&hash=').concat(this.getHash(timestamp));
  }

  public getHash(timestamp: string) {
    return md5(timestamp.concat(this.PRIV_KEY).concat(this.PUB_KEY));
  }

  public getCurrentTimestamp(): number {
    return Math.floor(new Date().getTime() / 1000);
  }

}
