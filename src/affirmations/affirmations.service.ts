import { Injectable } from '@nestjs/common';
import { randomInteger } from 'src/common/utils/random';
import { AffirmationsFileRepository } from './affirmations-file.repository';

@Injectable()
export class AffirmationsService {
    constructor(private readonly src: AffirmationsFileRepository) {}

    async getAffirmation(): Promise<string> {
        const payload = await this.src.findAll();
        return payload[randomInteger(payload.length)];
    }
}
