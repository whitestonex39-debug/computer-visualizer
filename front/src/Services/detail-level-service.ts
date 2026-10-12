import { signal, Injectable } from '@angular/core';

export enum LevelNumbers {
    Level1 = 1,
    Level2 = 2,
}

@Injectable({
    providedIn: 'root',
})

export class DetailLevelService {
    level = signal(1);

    setLevel(level: LevelNumbers) {
        this.level.set(level);
    }
}