import { Controller, Get, Body, Post } from '@nestjs/common';
import { pedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';


@Controller()
export class pedidoController {
  constructor(private readonly pedidoService: pedidoService) {}

  @Get('/TESTEGETPEDIDO')
  getHello(): string {
    return this.pedidoService.getHello();
  }

  @Post('/post')
  async create(@Body() createPedidoDto: CreatePedidoDto){
    const createPedido =  this.pedidoService.createPedido(createPedidoDto)
    return await createPedido ;
  }

}
