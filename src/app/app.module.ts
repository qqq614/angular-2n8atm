import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReusableGridTemplateComponent } from './reusable-grid-template/reusable-grid-template.component';
import { BookHighlighterDirective } from './book-highlighter.directive';
import { AuthorHighlighterDirective } from './author-highlighter.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ReusableGridTemplateComponent,
    BookHighlighterDirective,
    AuthorHighlighterDirective,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ReusableGridTemplateComponent],
})
export class AppModule {}
