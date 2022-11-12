import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inline-input',
  templateUrl: './inline-input.component.html'
})
export class InlineInputComponent implements AfterViewInit {

  @ViewChild("inlineinpt")
  private input!: ElementRef;

  @Input() value: any  = "";
  @Input() placeholeder: string = "";
  @Output() result = new EventEmitter<string>();
  @Output() isFocused = new EventEmitter<boolean>();

  constructor() { }

  emitData() {
    this.result.emit(this.value);
  }

  onFocusChange(e: any) {
    this.isFocused.emit(e as boolean);
  }

  ngAfterViewInit(): void {
    if(!this.value)
      this.input.nativeElement.focus()
  }

}
