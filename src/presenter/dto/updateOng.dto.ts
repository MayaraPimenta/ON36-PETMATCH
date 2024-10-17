import { PartialType } from '@nestjs/swagger';
import { CreateOngDto } from './createOng.dto';

export class UpdateOngDto extends PartialType(CreateOngDto) {}
