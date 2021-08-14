import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {LanguageRouterModule} from './language-router.module';



@NgModule({
  declarations: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    LanguageRouterModule
  ]
})
export class LanguageModule { }
