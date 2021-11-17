import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashtoryModule } from './dashtory/dashtory.module';
import { FinanceModule } from './finance/finance.module';
import { DeptsModule } from './depts/depts.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [DashtoryModule, FinanceModule, DeptsModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
