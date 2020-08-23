import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AffirmationsResositoryInterface } from "src/common/interfaces/affirmations-repository.interface";
import { readFileAsync } from "src/common/utils/filesystem";
import { affirmations } from './affirmations';

@Injectable()
export class AffirmationsFileRepository implements AffirmationsResositoryInterface {
    constructor(private readonly configService: ConfigService) {}

    async findAll(): Promise<string[]> {
        const path = this.configService.get<string>('affirmationsFilePath');
        if (path) {
            return (await readFileAsync(path, { encoding: 'utf-8' })).split('\n');
        }
        return affirmations;
    }
}