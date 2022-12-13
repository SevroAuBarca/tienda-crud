import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  public producto: any = {}!;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Tienda: TiendaService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.Tienda.getBook(id).subscribe((data) => {
      this.producto = data.body;
      console.log(this.producto);
    });
  }

  async deleteBook() {
    const res = await Swal.fire({
      title: `Seguro que quiees elimiar el libro "${this.producto.nombre.trim()}"?`,
      text: 'No podra volver a recuperarlo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!',
      cancelButtonText: 'Cancelar',
    });

    if (res?.isConfirmed) {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.Tienda.deleteBook(id).subscribe(async (_) => {
        const res = await Swal.fire(
          'Eliminado con exito!',
          'Su libro fue eliminado.',
          'success'
        );

        (res.isConfirmed || res.isDismissed) && this.router.navigate(['/']);
      });
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
