import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
    pageTite: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    // listFilter: string = 'cart';
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(val: string) {
        this._listFilter = val;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts: IProduct[];
    products: IProduct[] = [];
    constructor(private _productService: ProductService) {
    }
    onRatingClicked( message: string ): void {
        this.pageTite = 'Product List ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filterProducts = this.products;
    }
}
