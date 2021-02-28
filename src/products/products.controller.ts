import { Controller, Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { product } from './models/product.model';

@Controller('products')
export class ProductsController {
    @Get()
    getProducts(): product[]{
        return [
            {
                "id": 0,
                "name": "name",
                "description": "blah blah",
                "unit": "gram",
                "unit_price": 1000,
            },
            {
                "id": 1,
                "name": "name",
                "description": "blah blah",
                "unit": "gram",
                "unit_price": 1000,
            },
            {
                "id": 2,
                "name": "name",
                "description": "blah blah",
                "unit": "gram",
                "unit_price": 1000,
            },
            {
                "id": 3,
                "name": "name",
                "description": "blah blah",
                "unit": "gram",
                "unit_price": 1000,
            },
            {
                "id": 4,
                "name": "name",
                "description": "blah blah",
                "unit": "gram",
                "unit_price": 1000,
            }
        ];
    }

    @Get(':id')
    getProduct(@Param('id') id: number): product{
        return {
            "id": 0,
            "name": "blah",
            "description": "blah blah",
            "unit": "gram",
            "unit_price": 1000, 
        }
    }

    @Post()
    create( @Body() product: product){
        return product;
    }

    @Put(':id')
    modify(@Param('id') id: number){

    }

    @Delete(':id')
    remove(@Param('id') id: number){

    }
}
