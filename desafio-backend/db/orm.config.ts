import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username:'postgres',
    password:'admin123',
    port:5432,
    host:'localhost',
    database:'desafio-back',
    synchronize:true,
    entities:['../src/**/*.entity{.ts,.js}'],
}