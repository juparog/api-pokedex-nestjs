import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  @IsString()
  @MinLength(1)
  name?: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  no?: number;
}
