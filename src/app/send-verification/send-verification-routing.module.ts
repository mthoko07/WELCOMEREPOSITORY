import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendVerificationPage } from './send-verification.page';

const routes: Routes = [
  {
    path: '',
    component: SendVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendVerificationPageRoutingModule {}
