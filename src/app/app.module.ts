import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { HttpClientModule} from '@angular/common/http';
import { SharepointService } from './shared/services/sharepoint.service';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { WikiNavComponent } from './wiki/wiki-nav/wiki-nav.component';
import { WikiContentComponent } from './wiki/wiki-content/wiki-content.component';

const appRoutes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    NavComponent,
    WikiNavComponent,
    WikiContentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [SharepointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
