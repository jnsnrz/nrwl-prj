import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'; 

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
   async getList() {
    return await this.service.getList();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto ) {

    console.log(createUserDto);

   return await this.service.create(createUserDto);
 }

 @Put(':id')
 async update() {
  return await this.service.update();
}

@Delete(':id')
async delete(@Param('id') id) {
 return await this.service.delete(id);
}


  
}
