import { WeatherApiService } from './../weather-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  cityName: string = '';
  weatherData: any;

  constructor(private weatherApiService: WeatherApiService) {  }

  searchCity() {
    this.weatherApiService.getWeatherByCity(this.cityName)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
}
