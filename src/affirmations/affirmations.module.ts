import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { AffirmationsFileAdapter } from './affirmations-file.adapter';
import { AffirmationsService } from './affirmations.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  providers: [AffirmationsService, AffirmationsFileAdapter],
  exports: [AffirmationsService]
})
export class AffirmationsModule {}
