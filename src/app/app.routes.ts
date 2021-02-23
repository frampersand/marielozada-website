import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReportajesComponent } from './components/reportajes/reportajes.component';
import { ReportajeComponent } from './components/reportaje/reportaje.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';


const APP_ROUTES: Routes = [
 { path: 'post/:id', component: BlogPostComponent },
 { path: 'blog', component: BlogListComponent },
 { path: 'reportaje/:id', component: ReportajeComponent },
 { path: 'reportajes', component: ReportajesComponent },
 { path: 'notas', component: NotasComponent },
 { path: 'home', component: InicioComponent },
 { path: 'newsletter', component: NewsletterComponent},
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
