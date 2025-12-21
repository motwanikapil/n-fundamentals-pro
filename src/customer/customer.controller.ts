import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import type { Customer } from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto): Customer {
    return this.customerService.addCustomer(createCustomerDto);
  }
}
