import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[authorHighlighter]',
})
export class AuthorHighlighterDirective {
  constructor() {}

  @Input('selectedAuthor') selectedAuthor: string;
  @Input('targetAuthor') targetAuthor: string;
  @HostBinding('style.backgroundColor') bgColor: string;

  ngOnChanges() {
    this.bgColor =
      this.selectedAuthor === this.targetAuthor ? 'yellow' : 'transparent';
  }
}
