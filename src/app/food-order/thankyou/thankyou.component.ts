import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

    payTxID:any;
    payRefID:any;
    payStatus:any;

    senderID:any;
    refID:any;
    storeID:any;
    cartID:any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
        // get url parameter style e.g http://209.58.160.20:8090/thankyou?txid=PY160321055629630e&refId=R123123111&status=SUCCESS
        this.activatedRoute.queryParams.subscribe(params => {
        this.payTxID = params['txid'];
        this.payRefID = params['refId'];
        this.payStatus = params['status'];
        // console.log(this.payTxID + "-" + this.payRefID + "-" + this.payStatus); 
    });
  }

  ngOnInit(): void {

    this.senderID = localStorage.getItem('sender_id');
    this.refID = localStorage.getItem('ref_id');
    this.storeID = localStorage.getItem('store_id');
    this.cartID = localStorage.getItem('cart_id');

    if(this.payStatus == "SUCCESS"){
        Swal.fire({
            title: 'Sweet!',
            text: 'Your payment successfully!',
            imageUrl: './assets/image/paid.jpg',
            imageWidth: 270,
            imageHeight: 270,
            imageAlt: 'Custom image',
        })
    }else{
        Swal.fire({
            title: 'Ops!',
            text: 'Your payment failed!',
            imageUrl: './assets/image/payfail.jpg',
            imageWidth: 270,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
    }

  }

  shopAgain(){
    this.route.navigateByUrl('/catalogue?referenceId='+this.refID+'&senderId='+this.senderID+'&storeId='+this.storeID);
  }

}
