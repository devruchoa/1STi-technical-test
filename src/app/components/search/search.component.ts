import { Weather } from '../weather';
import { WeatherApiService } from './../weather-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  cityName: string = '';
  weather: Weather | null = null;

  constructor(private weatherApiService: WeatherApiService) {  }

  searchCity() {
    this.weatherApiService.getWeatherByCity(this.cityName)
      .subscribe(data => {
        this.weather = data;
      },
      error => {
        console.log(error);
      });
  }

  closeCard() {
    this.weather = null;
  }
}
