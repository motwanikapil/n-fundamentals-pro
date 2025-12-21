import { Controller, Get, Param } from '@nestjs/common';
import {ProductService} from './product.service'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}
	@Get() 
	getProducts(){
		return this.productService.getAllProducts()
	}

	@Get(':id')
	getProduct(@Param('id') id:string ) {
		// by default we get the params as strings so we need to typecast it.
		return this.productService.getProductById(Number(id))
	}
}
