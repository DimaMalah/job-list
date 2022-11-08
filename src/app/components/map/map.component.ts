import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() lat!: string  //------latitude for map marker and map center
  @Input() lng!: string  //------longitude for map marker and map center

  display: any
  center!: google.maps.LatLngLiteral
  zoom = 14
  markerOptions: google.maps.MarkerOptions = {draggable: false}
  markerPositions: google.maps.LatLngLiteral[] = []


  moveMap = (event: google.maps.MapMouseEvent) => {
    if (event.latLng != null) this.center = (event.latLng.toJSON())
  }

  move = (event: google.maps.MapMouseEvent) => {
    if (event.latLng != null) this.display = (event.latLng.toJSON())
  }

  constructor() { }

  ngOnInit(): void {
    this.center = {lat:+this.lat, lng:+this.lng}
    this.markerPositions = [{lat:+this.lat, lng:+this.lng}]
  }


}
