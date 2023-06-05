import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username:'postgres',
    password:'admin123',
    port:5432,
    host:'postgres',
    database:'desafio-back',
    entities:['dist/**/*.entity{.ts,.js}'],
    migrations:['dist/db/migrations/*.js']
}