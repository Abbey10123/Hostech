import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentController } from './assignments/assignments.controller';
import { AssignmentModule } from './assignments/assignments.module';
import { CertificatesModule } from './certificates/certificates.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AssignmentModule, CertificatesModule, TransactionsModule],
  controllers: [AppController, AssignmentController],
  providers: [AppService],
})
export class AppModule {}
