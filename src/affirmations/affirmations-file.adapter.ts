import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AffirmationsAdapterInterface } from "src/common/interfaces/affirmations-adaper.interface";
import { readFileAsync } from "src/common/utils/filesystem";
import { affirmations } from './affirmations';

@Injectable()
export class AffirmationsFileAdapter implements AffirmationsAdapterInterface {
    constructor(private readonly configService: ConfigService) {}

    async findAll(): Promise<string[]> {
        const path = this.configService.get<string>('affirmationsFilePath');
        if (path) {
            return (await readFileAsync(path, { encoding: 'utf-8' })).split('\n');
        }
        return affirmations;
    }
}