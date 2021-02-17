import { Component, OnInit } from '@angular/core';

import { Category } from './food-order/../../models/Category';
import { Product } from './food-order/../../models/Product';

import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { DataBindService } from './../databind.service';

@Component({
  selector: 'food-app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  iconEye = faEye;
  iconCart = faShoppingCart;

  categories:Category[];
  product:Product[];

  leftNavDisabled = false;
  rightNavDisabled = false;
  idx = 0;
  details: any[] = [];

  // modalDataTest:Product[];
  modalDataTest:any = []

  constructor(
    private _databindService: DataBindService 
  ) { }

  ngOnInit(): void {
    this.product = this._databindService.getProduct();
    this.categories = this._databindService.getCategories();
    this.modalDataTest = this._databindService.getProduct();
  }

  onGetDetails(productid){
    console.log(productid)

    this.modalDataTest.map((modalDataTest, index) => {
      index++;
      if(index == productid){
        console.log(modalDataTest);

        this.details = modalDataTest;
        return this.details;
        // console.log(details);
      }
    })

    
  }


  onIndexChanged(idx) {
    this.idx = idx;
    // console.log('current index: ' + idx);
  }

  onDragScrollInitialized() {
    // console.log('first demo drag scroll has been initialized.');
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    // console.log('snap animation finished');
  }

  onDragStart() {
    // console.log('drag start');
  }

  onDragEnd() {
    // console.log('drag end');
  }

}
