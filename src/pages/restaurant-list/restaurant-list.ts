import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestaurantsProvider } from '../../providers/restaurants/restaurants';

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {
  restaurants: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantsProvider: RestaurantsProvider) {
    let restaurant = this.restaurantsProvider.getRestaurants();
    restaurant.subscribe(data => {
      this.restaurants = data.restaurants;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantListPage');
  }
}
