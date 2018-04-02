import { Component, OnInit, Input, Output, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as data from '../osiedla_207.geojson';
declare const google: any;
@Component({
  selector: 'app-modul-map',
  templateUrl: './modul-map.component.html',
  styleUrls: ['./modul-map.component.css']
})
export class ModulMapComponent implements OnInit {
  options: any;
  district = 'assets/osiedla_207.geojson';
  mapData;
  map;
  display: boolean = false;
  data;
  overlays: any[];
  mapPoint = {
    center: { lat: 51.1267432, lng: 17.063248 },
    zoom: 11
  };
  activeDistrict: any;
  constructor(private http: HttpClient, private _ngZone: NgZone) {
    this.data = {
      labels: [
        '0-2',
        '3-6',
        '7-12',
        '13-15',
        '16-18',
        '19-24',
        '25-34',
        '35-44',
        '45-59K64M',
        '60K65M-79',
        '80-I-W'
      ],
      datasets: []
    };
    this.activeDistrict = {};
  }

  ngOnInit() {
    this.getPosts(this.district).subscribe(resp => {
      this.mapData = resp['features'];
      const dataObj = {
        label: 'Population',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: []
      };
      //   this.mapData.forEach((element, index) => {
      //     if (index > 8) {
      //       return false;
      //     }
      //     dataObj.data.push(element.properties.SUMA);
      //     // this.data.labels.push(element.properties.NAZWA);
      //   });

      this.data.datasets.push(dataObj);
      console.log(this.data);
    });
    setTimeout(() => {
      this.map.data.loadGeoJson(this.district);
    }, 1000);
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getPosts(url) {
    return this.http.get(url);
  }
  showDialog(obj) {
    console.log(obj);
    // for (var property  in obj) {
    //   console.log(prop);
    // }
    const keyNames = Object.keys(obj);
    console.log(keyNames);

    for (const prop in obj) {
      if (prop == 'W0_2') {
          this.data.datatset.push(obj[prop]);
        break;
      }


    }

    this.display = true;
  }
  initMap(event) {
    this.map = event.map;
    const self = this;
    this.map.data.addListener('mouseover', event => {
      self._ngZone.run(() => {
        const prop = event.feature.f;
        this.activeDistrict = prop;
      });
    });
    this.map.data.addListener('click', event => {
      self._ngZone.run(() => {
        this.showDialog(this.activeDistrict);
      });
    });
    this.map.data.setStyle(elem => {
      return {
        fillColor: this.getRandomColor(),
        clickable: true,
        zIndex: 1,
        text: elem.f.NAZWA
      };
    });
  }
}
