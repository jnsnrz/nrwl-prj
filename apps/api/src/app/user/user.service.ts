import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getData() {
    console.log('AppService', this);
    return { message: 'Welcome to !' };
  }

  getList() {

    return true;
  }

  create(data) {

    console.log(data);
    return true;
  }

  update() {


  }

  delete(id) {
    console.log(id);

  }


}
