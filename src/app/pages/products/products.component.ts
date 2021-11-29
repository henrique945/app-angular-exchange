import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductProxy } from '../../models/proxies/product.proxy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
  ) {
    this.isMine = this.route.snapshot.queryParams.redirect;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      if (this.isMine) {
        this.listProducts.unshift({
          name: 'Disco de Vinil',
          isMine: true,
        });
      }
    }, 1500);
  }

  public isMine: boolean = false;

  public listProducts: ProductProxy[] = [
    {
      name: 'Chave de fenda',
      phone: '(11) 97190-8333',
      hour: '12:45',
      isMine: false,
    },
    {
      name: 'Bola de futebol',
      phone: '(19) 06235-8333',
      hour: '16:23',
      isMine: false,
    },
    {
      name: 'Teclado mecânico',
      phone: '(15) 06235-2323',
      hour: '18:02',
      isMine: false,
    },
    {
      name: 'Tesoura',
      phone: '(11) 19095-4435',
      hour: '23:49',
      isMine: false,
    },
  ];

}
