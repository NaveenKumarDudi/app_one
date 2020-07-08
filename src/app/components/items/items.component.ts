import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input('product') product: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
