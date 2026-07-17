import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  search = signal<string>('');
  products = signal<string[]>(['Phone', 'Laptop', 'Tablet', 'Monitor', 'Keyboard']);
  filteredProducts = signal<string[]>(this.products());

  constructor(private route: ActivatedRoute, private router: Router) {
    
    //URL to signal update
    this.route.queryParamMap.subscribe(params => {
      this.search.set(params.get('search') || '');
    });

    //signal to UI update
    effect(() => {
      const value = this.search().toLowerCase();
      this.filteredProducts.set(
        this.products().filter(product => 
          product.toLowerCase().includes(value)
        )
      )
    });
  }

  //signal to URL update
  updateUrl () {
    this.router.navigate([], {
      queryParams: { search: this.search() }
    });
  }

}
