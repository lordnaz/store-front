import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepCatalogueComponent } from './food-order/layout-catalogue/step-catalogue.component'
import { StepCheckoutComponent } from './food-order/layout-checkout/step-checkout.component'

const routes: Routes = [

    { path: "", redirectTo: "catalogue", pathMatch: "full" },
    { path: "catalogue", component: StepCatalogueComponent },
    { path: "catalogue/:referenceId/:senderId/:storeId/:", component: StepCatalogueComponent },
    { path: "checkout", component: StepCheckoutComponent },

    { path: "**", redirectTo: "/catalogue" }
];
// http://209.58.160.20:8090/catalogue?referenceId=1234&senderId=5678&storeId=9101
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
