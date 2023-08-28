import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = '449d4163671c1487c4729cc196a2149f';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;

    return this.http.get(url).pipe(
      map((data: any) => this.mapToWeather(data))
    );
  }

  private mapToWeather(data: any): Weather {
    return {
      city: data.name,
      state: '',
      country: data.sys.country,
      temperature: parseInt(data.main.temp),
      minTemperature: parseInt(data.main.temp_min),
      maxTemperature: parseInt(data.main.temp_max),
      status: data.weather[0].description,
      windSpeed: parseInt(data.wind.speed),
      thermalSensation: parseInt(data.main.feels_like),
      humidity: parseInt(data.main.humidity)
    };
  }
}
