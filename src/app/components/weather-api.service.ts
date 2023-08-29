import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Weather } from './weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;

    return this.http.get(url).pipe(
      map((data: any) => this.mapToWeather(data))
    );
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private mapToWeather(data: any): Weather {
    return {
      city: data.name,
      state: '',
      country: data.sys.country,
      temperature: parseInt(data.main.temp),
      minTemperature: parseInt(data.main.temp_min),
      maxTemperature: parseInt(data.main.temp_max),
      status: this.capitalizeFirstLetter(data.weather[0].description),
      windSpeed: parseInt(data.wind.speed),
      thermalSensation: parseInt(data.main.feels_like),
      humidity: parseInt(data.main.humidity)
    };
  }
}
