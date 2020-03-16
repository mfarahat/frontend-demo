import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
    {
        path: 'customers',
        component: CustomersListComponent
    },
    {
        path: 'customers/:id',
        component: CustomerInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }