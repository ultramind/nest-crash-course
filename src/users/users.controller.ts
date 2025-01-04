import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("users")
@Controller('users')
export class UsersController {
    constructor (private usersService:UsersService){}
    @Get()
    getUsers():User[]{
        return this.usersService.findAll()
    }

    @Get(':id')
    getUserById(@Param('id') id:string):User {
        return this.usersService.findOne(Number(id))
    }

    @Post()
    createUser(@Body() body:CreateUserDTO):User{
        return this.usersService.createUser(body)
    }
    
}
