import { PartialType } from '@nestjs/mapped-types';
import { CreateOngDto } from './createOng.dto';

export class UpdateOngDto extends PartialType(CreateOngDto) {}
