import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CrudDemoComponent } from './component/crud-demo/crud-demo.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { searchEmailPipe, searchGenderPipe, searchNumberPipe, SearchUserPipe } from './pipes/search.pipe';
 import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [AppComponent, CrudDemoComponent, SearchUserPipe, searchNumberPipe, searchEmailPipe, searchGenderPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
