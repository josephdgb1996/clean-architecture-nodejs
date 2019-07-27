import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { CreateCatDto } from '../entities/dto/create-cat-dto';
import { CatsUseCase } from '../usecases/usecase/cats.usecase';
import { ICat } from '../entities/interfaces/cat.interfaces';
import { ValidationPipe } from '../pipes/validation.pipe';
import {
    ApiOperation,
    ApiResponse,
    ApiUseTags,
} from '@nestjs/swagger';
import { Cat } from '../entities/classes/cat.class';

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsUseCase: CatsUseCase) { }

    @Post()
    @ApiOperation({ title: 'Create cat' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: Cat,
    })
    @UsePipes(new ValidationPipe())
    async create(@Body() createCatDto: CreateCatDto) {
        const cat = await this.catsUseCase.create(createCatDto);
        return cat;
    }

    @Get('cats')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Cat,
    })
    async findAll(): Promise<ICat[]> {
        return this.catsUseCase.findAll();
    }
}