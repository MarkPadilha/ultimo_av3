import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { PedidoPratoService } from './pedido_prato.service';
import { CreatePedidoPratoDto } from '../pedido/dto/createPedidoPrato.dto';
import { PedidoPratoEntity } from './pedido_prato.entity';

@Controller()
export class PedidoPratoController {
  constructor(private readonly pedidoPratoService: PedidoPratoService) {}
    


  @Get('/allpedido_prato')
  async buscarTodos() {
    try {
      const pedidoPratos = await this.pedidoPratoService.realizarConsulta();
      return { data: pedidoPratos };
    } catch (error) {
        return { error: 'Falha ao buscar pedido_pratos', message: error.message };
    }
  }

  @Get(':id') // request que espera um parâmetro de ID ===============================================
    async buscarPorId(@Param('id', ParseIntPipe) pedidoPratoId: number): Promise<any> {
    return this.pedidoPratoService.realizarConsultaPorId(pedidoPratoId);
  }

  @Post('/post_pedido_prato/')
  async adicionarPedidoPrato(
    @Param('idPedido') idPedido: number,
    @Param('idPrato') idPrato: number,
  ): Promise<PedidoPratoEntity> {
    return await this.pedidoPratoService.adicionarPedidoPrato(idPedido, idPrato);
  }

}