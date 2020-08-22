import { Injectable } from '@nestjs/common';
import VoiceResponse = require('twilio/lib/twiml/VoiceResponse');

@Injectable()
export class TwilioService {
    private _defaultDelay: '300ms';

    say(message: string): string {
        const response = new VoiceResponse();
        const say = response.say(message);
        say.break_({ time: this._defaultDelay });
        return response.toString();
    }
}
