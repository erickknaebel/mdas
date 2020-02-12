import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingComponent
  ]
})
export class TestModule { }
