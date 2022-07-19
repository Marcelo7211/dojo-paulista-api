import { ApiProperty } from "@nestjs/swagger";

export default class UserLogin {
    
    @ApiProperty()
    usuario: string;

    @ApiProperty()
    senha: string;
}