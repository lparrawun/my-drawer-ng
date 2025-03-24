import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  selector: 'Purchase',
  templateUrl: './purchase.component.html',
})
export class PurchaseComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    console.log("adasd");
    console.log({nombre: {nombre: {nombre:"pepe"}}});
    console.dir({nombre: {nombre: {nombre:"pepe"}}});
    console.log([1,2,3,]);
    console.dir([1,2,3,]);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
