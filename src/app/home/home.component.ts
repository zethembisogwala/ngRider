import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	this.initMap()
  }

  initMap(){
  	var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

	mapboxgl.accessToken = 'pk.eyJ1IjoiemV0aGVtYmlzb2d3YWxhIiwiYSI6ImNrOHI5NjZpMjAwd3kzbHBlcDZ6OWtqaDAifQ.nEL_U6fe_KFYZotgCvTYJA';
	var map = new mapboxgl.Map({
  		container: 'map',
  		style: 'mapbox://styles/mapbox/streets-v11'
	});

  }

}
