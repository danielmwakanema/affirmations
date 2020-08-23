import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { AffirmationsFileRepository } from './affirmations-file.repository';
import { AffirmationsService } from './affirmations.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  providers: [AffirmationsService, AffirmationsFileRepository],
  exports: [AffirmationsService]
})
export class AffirmationsModule {}
