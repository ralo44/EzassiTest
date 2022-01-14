import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    NgbModalConfig, 
    NgbModal
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
