import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product = {
    name: 'test',
    id: 'test',
    price: 'test',
    url: 'test',
    image: 'test',
    description: 'test',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
