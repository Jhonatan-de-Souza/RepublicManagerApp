"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var republic_registration_component_1 = require("./Components/republic-registration/republic-registration.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" },
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent },
    { path: "", redirectTo: "/republicregistration", pathMatch: "full" },
    // { path:"login",component: LoginComponent},
    // { path: "registration", component: RegistrationComponent },
    { path: "republicregistration", component: republic_registration_component_1.RepublicRegistrationComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0hBQW1IO0FBR25ILHNDQUF5QztBQUN6QyxzREFBdUU7QUFNdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIseURBQXlEO0lBQ3pELGdEQUFnRDtJQUNoRCx3REFBd0Q7SUFDeEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFFO0lBQ2xFLDZDQUE2QztJQUM3Qyw4REFBOEQ7SUFDOUQsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLCtEQUE2QixFQUFFO0NBRzdFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcHVibGljUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3JlcHVibGljLXJlZ2lzdHJhdGlvbi9yZXB1YmxpYy1yZWdpc3RyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3NoYXJlZC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgLy8geyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICAvLyB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9yZXB1YmxpY3JlZ2lzdHJhdGlvblwiLHBhdGhNYXRjaDpcImZ1bGxcIiB9LFxuICAgIC8vIHsgcGF0aDpcImxvZ2luXCIsY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudH0sXG4gICAgLy8geyBwYXRoOiBcInJlZ2lzdHJhdGlvblwiLCBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyZXB1YmxpY3JlZ2lzdHJhdGlvblwiLCBjb21wb25lbnQ6IFJlcHVibGljUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0sXG5cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=