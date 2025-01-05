import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("users")
@Controller('users')
export class UsersController {
    constructor (private usersService:UsersService){}

    @ApiOkResponse({type:User, isArray:true})
    @Get()
    getUsers():User[]{
        return this.usersService.findAll()
    }

    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number):User {
        const user = this.usersService.findOne(id)
        if (!user) {
            throw new NotFoundException()
        }
        return user
    }

    @ApiCreatedResponse({type:User})
    @Post()
    createUser(@Body() body:CreateUserDTO):User{
        return this.usersService.createUser(body)
    }
    
}
