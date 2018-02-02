import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input('data') data: number;
  @Input('status') status: boolean;
  @ViewChild('resultParag') resultParag: ElementRef;
  result: any;

  constructor() { }

  ngOnInit() {
    this.result = "";
    this.resultParag.nativeElement.style.color="blue";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.status) {
      if (this.data % 2 === 0) {
        this.result = this.data;

        if(this.resultParag.nativeElement.style.color==="blue"){
          this.resultParag.nativeElement.style.color="red";
        } else {
          this.resultParag.nativeElement.style.color="blue";
        }
      }
    } else {
      this.result = "";
    }
  }

}
