import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBookHighlighter]',
})
export class BookHighlighterDirective {
  constructor() {}

  @Input('selectedBooks') selectedBooks: any;
  @Input('targetBook') targetBook: string;
  @HostBinding('style.backgroundColor') bgColor: string;

  ngOnChanges() {
    this.bgColor = this.selectedBooks.includes(this.targetBook)
      ? 'yellow'
      : 'transparent';
  }
}
