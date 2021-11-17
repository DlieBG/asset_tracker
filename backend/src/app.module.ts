import { Module } from '@nestjs/common';
import { DashtoryModule } from './dashtory/dashtory.module';
import { FinanceModule } from './finance/finance.module';
import { DeptsModule } from './depts/depts.module';
import { PropertyModule } from './property/property.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    DashtoryModule, 
    FinanceModule, 
    DeptsModule,
    PropertyModule
  ]
})
export class AppModule {}
