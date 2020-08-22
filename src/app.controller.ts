import { Controller, Header, Post } from '@nestjs/common';
import { AffirmationsService } from './affirmations/affirmations.service';
import { TwilioService } from './twilio/twilio.service';

@Controller()
export class AppController {
  constructor(private readonly affirmationsService: AffirmationsService,
              private readonly twilioService: TwilioService) {}

  @Post('/*')
  @Header('Content-Type', 'text/html')
  async getAffirmation(): Promise<string> {
    const affirmation = await this.affirmationsService.getAffirmation();
    return this.twilioService.say(affirmation);
  }
}
