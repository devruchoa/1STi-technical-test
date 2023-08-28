import { Weather } from '../weather';
import { WeatherApiService } from './../weather-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-capital-overview',
  templateUrl: './capital-overview.component.html',
  styleUrls: ['./capital-overview.component.less']
})
export class CapitalOverviewComponent {
  readonly capitals: string[] = ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília', 'Belém', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'];

  weatherDataMap: Map<string, Weather> = new Map();

  constructor(private weatherApiService: WeatherApiService) {  }

  ngOnInit(): void {
    this.capitals.forEach(city => {
      this.weatherApiService.getWeatherByCity(city).subscribe(data => {
        this.weatherDataMap.set(city, data);
      })
    })
  }
}
