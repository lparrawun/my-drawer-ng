import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component'

@NgModule({
  imports: [NativeScriptCommonModule, PurchaseRoutingModule],
  declarations: [PurchaseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PurchaseModule {}
