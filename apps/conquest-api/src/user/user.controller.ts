import { BadRequestException, ValidationPipe } from '@nestjs/common';
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UseFilters } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { HttpExceptionFilter } from '../http-exception-filter';
import { CreateUserDto } from './dto/create-user.dto';
import { omit } from 'lodash';

function validationExceptionFactory(errors) {
  const message = errors
    .map((error) => {
      const constraints = Object.values(error.constraints);
      return constraints.join(', ');
    })
    .join('; ');

  return new BadRequestException(message);
}

@ApiTags('user')
@Controller('user')
@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return omit(user, 'password');
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of all users.' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: 200, description: 'The user with the specified ID.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiResponse({ status: 200, description: 'The updated user.' })
  async updateUser(
    @Param('id') id: number,
    @Body() userData: Partial<User>
  ): Promise<User> {
    return await this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({ status: 204, description: 'User successfully deleted.' })
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
