import { Injectable } from '@nestjs/common';
import { randomInteger } from 'src/common/utils/random';
import { AffirmationsFileAdapter } from './affirmations-file.adapter';

@Injectable()
export class AffirmationsService {
    constructor(private readonly src: AffirmationsFileAdapter) {}

    async getAffirmation(): Promise<string> {
        const payload = await this.src.findAll();
        return payload[randomInteger(payload.length)];
    }
}
