import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type:'postgres',
    host: 'roundhouse.proxy.rlwy.net', 
    port: 18585, 
    username: 'postgres', 
    password: 'wpFniZOUMxVsSjRTBSHvhrBOrksEFLaD',
    database: 'railway', 
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
});