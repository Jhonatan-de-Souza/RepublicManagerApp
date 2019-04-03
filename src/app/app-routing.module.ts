import { RepublicRegistrationComponent } from './Components/republic-registration/republic-registration.component';
import { LoginComponent } from './Components/shared/login/login/login.component';
import { ItemDetailComponent } from './Components/item/item-detail.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "./Components/item/items.component";
import { RegistrationComponent } from './Components/registration/registration.component';


const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" },
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent },
    { path: "", redirectTo: "/republicregistration",pathMatch:"full" },
    // { path:"login",component: LoginComponent},
    // { path: "registration", component: RegistrationComponent },
    { path: "republicregistration", component: RepublicRegistrationComponent },


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }