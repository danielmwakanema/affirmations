import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AffirmationsModule } from './affirmations/affirmations.module';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [AffirmationsModule, TwilioModule],
  controllers: [AppController]
})

export class AppModule {}
