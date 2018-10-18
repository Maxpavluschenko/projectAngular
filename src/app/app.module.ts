import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsEmployeesComponent } from './employees/products-employees.component';
import { CustomersEmployeeComponent } from './employees/customers-employee.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsEmployeesComponent },
  { path: 'customers', component: CustomersEmployeeComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsEmployeesComponent,
    CustomersEmployeeComponent,
    ProductsPageComponent,
    CustomersPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
