import { BaseService } from '.';
import { Score } from '../models';
import { ScoreRequestBody } from '../types';
import letterScores from '../database/data/letterScores.json';
import { validateWord } from '../util/wordLookUp';

export class SubmitEntryService extends BaseService<Score> {
  private calculateWordScore(word: string): number {
    let score = 0;

    const letterMappings: { [key: string]: number } = letterScores;

    // Calculate the score for each letter in the word
    for (const letter of word.toLowerCase()) {
      score += letterMappings[letter] || 0;
    }

    // Apply bonus scores for special tiles
    if (word.length >= 7) {
      score += 50; // Bonus for using all 7 letters
    }

    return score;
  }

  public createScoreEntry(score: ScoreRequestBody): Score {
    const points = this.calculateWordScore(score.word);
    return this.database.create({ name: score.name, points });
  }
}
