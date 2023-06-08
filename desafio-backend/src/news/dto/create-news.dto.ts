import { ApiProperty } from "@nestjs/swagger";

export class CreateNewsDto {
    @ApiProperty()
    titulo:string;
    @ApiProperty()
    subtitulo:string;
    @ApiProperty()
    conteudo:string;
    @ApiProperty()
    autor:string;
}
