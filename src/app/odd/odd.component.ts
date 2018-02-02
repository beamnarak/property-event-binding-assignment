import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('data') data: number;
  @Input('status') status: boolean;
  @ViewChild('resultParag') resultParag: ElementRef;
  result: any;

  constructor() { }

  ngOnInit() {
    this.result = "";
    this.resultParag.nativeElement.style.fontFamily ="sans-serif";
    this.resultParag.nativeElement.style.fontStyle ="italic";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.status) {
      if (this.data % 2 === 1) {
        this.result = this.data;
        if(this.resultParag.nativeElement.style.fontFamily==="sans-serif"){
          this.resultParag.nativeElement.style.fontFamily ="Impact";
          this.resultParag.nativeElement.style.fontStyle ="normal";
        } else {
          this.resultParag.nativeElement.style.fontFamily ="sans-serif";
          this.resultParag.nativeElement.style.fontStyle ="italic";
        }
      }
    } else {
      this.result = "";
    }
  }
}
