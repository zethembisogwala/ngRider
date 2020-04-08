import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  map: any;

  mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  

  constructor() { }

  ngOnInit(): void {
  	this.mapboxgl.accessToken = 'pk.eyJ1IjoiemV0aGVtYmlzb2d3YWxhIiwiYSI6ImNrOHI5NjZpMjAwd3kzbHBlcDZ6OWtqaDAifQ.nEL_U6fe_KFYZotgCvTYJA'; 


  	this.initMap()

  	this.setGeolocator()
  }

  initMap(){

	this.map = new this.mapboxgl.Map({
  		container: 'map',
  		style: 'mapbox://styles/zethembisogwala/ck8r9j1p70zoj1io8yv8ybad8',
  		zoom: 10
	});

  }

  setGeolocator(){
  	var geoCtrl = new this.mapboxgl.GeolocateControl({
    	positionOptions: {
        	enableHighAccuracy: true
    	},
    	trackUserLocation: true
	});

	this.map.addControl(geoCtrl)

	geoCtrl.trigger()
  }

}
