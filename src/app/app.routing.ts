import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from './table/table.component';
import { DownlaodComponent } from './downlaod/downlaod.component';
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
    {
        path: 'about-me', component: HomeComponent
    },
    {
        path: 'education', component: TableComponent
    },
    {
        path: 'chill-outs', component: DownlaodComponent
    },
    {
        path: 'social-presence', component: ContactUsComponent
    }
]

export const Router = RouterModule.forRoot(routes);