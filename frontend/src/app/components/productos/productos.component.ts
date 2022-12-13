import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public productos: any[] = [];
  constructor(private TiendaS: TiendaService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.TiendaS.getBooks().subscribe((data) => {
      this.productos = data.body;
      console.log(this.productos);
    });
  }
}
