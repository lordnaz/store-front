import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepCatalogueComponent } from './food-order/layout-catalogue/step-catalogue.component';
import { StepCheckoutComponent } from './food-order/layout-checkout/step-checkout.component';
import { ThankyouComponent } from './food-order/thankyou/thankyou.component';
import { ProductDetailsComponent } from './food-order/product-details/product-details.component';

const routes: Routes = [

    // { path: "", redirectTo: "catalogue", pathMatch: "full" },
    { path: "", component: StepCatalogueComponent, pathMatch: "full"},
    { path: ":senderId", component: StepCatalogueComponent },
    { path: ":storeId", component: StepCatalogueComponent },
    { path: "checkout", component: StepCheckoutComponent },
    // { path: "thankyou/:txid/:refId/:status", component: ThankyouComponent },
    { path: "thankyou", component: ThankyouComponent },
    // http://209.58.160.20:8090/thankyou?txid=PY160321055629630e&refId=R123123111&status=SUCCESS
    // { path: "product/:category/:senderId/:storeId", component: StepCatalogueComponent },
    { path: "products/:prodName", component: ProductDetailsComponent },
    { path: "products/:prodName/:storeName", component: ProductDetailsComponent },

    { path: "**", redirectTo: ""}
];
// http://209.58.160.20:8090/catalogue?referenceId=1234&senderId=5678&storeId=9101
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
