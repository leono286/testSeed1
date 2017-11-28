import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/items/item/item.component';
import { DomainOnlyPipe } from './pipes/domain-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ItemsComponent,
    ItemComponent,
    DomainOnlyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
