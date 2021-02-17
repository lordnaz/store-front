import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {

  constructor() { }

  getStepper(){
    return [
      {
        id: 1,
        name: 'Order',
        status: true,
        router: 'catalogue'
      },
      {
        id: 2,
        name: 'Checkout',
        status: false,
        router: 'checkout'
      },
      {
        id: 3,
        name: 'Done',
        status: false,
        router: 'done'
      }
    ]
  }


  getCategories(){
    return [
      {
        category: 'Food',
        available: true,
        img: 'banner-sample5.jpg' 
      },
      {
        category: 'Beverages',
        available: true,
        img: 'banner-sample4.jpg' 
      },
      {
        category: 'Special',
        available: false,
        img: 'banner-sample3.jpg' 
      },
      {
        category: "All Category",
        available: true,
        img: 'banner-sample6.jpg' 
      },
      {
        category: "All Category",
        available: true,
        img: 'banner-sample3.jpg' 
      },
      {
        category: "All Category",
        available: true,
        img: 'banner-sample2.jpg' 
      },
      {
        category: "All Category",
        available: true,
        img: 'banner-sample7.jpg' 
      },
      {
        category: 'Food',
        available: true,
        img: 'banner-sample3.jpg' 
      },
      {
        category: 'Beverages',
        available: true,
        img: 'banner-sample4.jpg' 
      },
      {
        category: 'Special',
        available: false,
        img: 'banner-sample5.jpg' 
      },
      {
        category: 'Addon',
        available: false,
        img: 'banner-sample4.jpg' 
      },
      {
        category: 'Ala Carte',
        available: true,
        img: 'banner-sample7.jpg' 
      }
    ]
  }


  getProduct(){
    return [
      {
        productid: 1,
        title: 'Ayam Goreng',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 10,
        image: 'food-sample1.jpg',
        status: true
      },
      {
        productid: 2,
        title: 'Burger King',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 7.5,
        image: 'food-sample2.jpg',
        status: true
      },
      {
        productid: 3,
        title: 'Sushi Empire',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 25,
        image: 'food-sample3.jpg',
        status: true
      },
      {
        productid: 4,
        title: 'Ayam Goreng',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 10,
        image: 'food-sample1.jpg',
        status: true
      },
      {
        productid: 5,
        title: 'Burger King',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 7.5,
        image: 'food-sample2.jpg',
        status: true
      },
      {
        productid: 6,
        title: 'Sushi Empire',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 12.5,
        image: 'food-sample3.jpg',
        status: true
      },
      {
        productid: 7,
        title: 'Ayam Goreng',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 10,
        image: 'food-sample1.jpg',
        status: true
      },
      {
        productid: 8,
        title: 'Burger King',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 7.5,
        image: 'food-sample2.jpg',
        status: true
      },
      {
        productid: 9,
        title: 'Sushi Empire',
        desc: 'Ayam Goreng Rangup lah di masak bersama ais krim',
        price: 12.5,
        image: 'food-sample3.jpg',
        status: true
      }
    ]
  }
}
