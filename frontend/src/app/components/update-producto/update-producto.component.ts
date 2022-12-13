import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TiendaService } from 'src/app/services/tienda.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css'],
})
export class UpdateProductoComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    nombre: '',
    marca: '',
    precio: 0,
    calidad: 0,
    descripcion: '',
  });
  public producto: any = {}!;

  constructor(
    private formBuilder: FormBuilder,
    private Tienda: TiendaService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }
  ngAfterViewInit(): void {
    // this.input!.nativeElement.style.backgroundImage = `url(${this.book.coverImage.url})`;
    //console.log(this.input?.nativeElement);
  }

  onSubmit(e: Event): void {
    e.preventDefault();

    //console.log(this.checkoutForm.value);
    const formData = new FormData();

    console.log(this.checkoutForm);

    formData.append('nombre', this.checkoutForm.get('nombre')?.value!);
    formData.append('marca', this.checkoutForm.get('marca')?.value!);
    formData.append('precio', '' + this.checkoutForm.get('precio')?.value!);
    formData.append('calidad', '' + this.checkoutForm.get('calidad')?.value!);
    formData.append(
      'descripcion',
      this.checkoutForm.get('descripcion')?.value!
    );

    this.Tienda.putBook(this.producto._id, formData).subscribe((data) => {
      // console.log(data);
      this.router.navigate([`/${data.body._id}`]);
      //console.log('entro');
    });
  }

  getProducto() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.Tienda.getBook(id).subscribe((data) => {
      this.producto = data.body;
      console.log(this.producto);
    });
  }
}
