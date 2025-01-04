import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users:any = [{id: 1,name:'John',email:'john@gmail.com'}, { id: 2,name:'Jane',email:'jane@gmail.com'}];

    findAll(){
        return this.users
    }

    findOne(userID:number){
        return this.users.find((user:any)=> user.id === userID)
    }
}
