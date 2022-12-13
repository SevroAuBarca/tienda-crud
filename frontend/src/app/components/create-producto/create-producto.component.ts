import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TiendaService } from 'src/app/services/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css'],
})
export class CreateProductoComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    nombre: '',
    marca: '',
    precio: 0,
    calidad: 0,
    descripcion: '',
  });

  @ViewChild('labelImg') labelImg!: ElementRef<HTMLLabelElement>;

  constructor(
    private formBuilder: FormBuilder,
    private Tienda: TiendaService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    //console.log(this.component);
  }

  onSubmit(): void {
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

    this.Tienda.postBook(formData).subscribe((data) => {
      console.log(data);
      this.router.navigate([`/${data.body._id}`]);
      console.log('entro');
    });
  }
}
