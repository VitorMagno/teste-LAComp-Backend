import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username:'postgres',
    password:'123456',
    port:5432,
    host:'localhost',
    database:'postgres',
    entities:[__dirname + '/../**/*.entity{.ts,.js}'],
    migrations:[__dirname + '/../**/migrations/*.js']
}