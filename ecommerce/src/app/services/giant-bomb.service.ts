import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiantBombService {
  private apiKey = '8695e4f46c71b51394f56553d86e2e1050deaf28';
  private apiUrl = 'https://www.giantbomb.com/api/';

  constructor(private http: HttpClient) {}

  getGameDetails(gameId: string) {
    const endpoint = `game/${gameId}`;
    const url = `${this.apiUrl}${endpoint}/?api_key=${this.apiKey}&format=json`;

    return this.http.get(url);
  }
}
