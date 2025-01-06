import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    private users:any = [{id: 1,name:'John',email:'john@gmail.com'}, { id: 2,name:'Jane',email:'jane@gmail.com'}];

    findAll():User[]{
        return this.users
    }

    findOne(userID:number): User{
        return this.users.find((user:any)=> user.id === userID)
    }

    createUser(body:CreateUserDTO):User {
        const newUser = {
            id: Date.now(),
            ...body
        }

        this.users.push(newUser)
        return newUser
    }
}
