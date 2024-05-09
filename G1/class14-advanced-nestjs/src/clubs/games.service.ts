/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { SubmitScoreDto } from './dtos/submit-score.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { Repository } from 'typeorm';
import { Player } from 'src/players/player.entity';

@Injectable()
export class GamesService {
  /* 
    1. Which clubs played a game
    2. Which club won, lost, or they draw.
    3. Who scored how many goals.
    Results:
    1. Update club info for wins, looses, draws
    2. Update player info for scored goals
  */

  constructor(
    @InjectRepository(Club) private readonly clubRepository: Repository<Club>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async submitScore({
    homeTeamId,
    awayTeamId,
    homeTeamScorersIds,
    awayTeamScorersIds,
  }: SubmitScoreDto): Promise<{ message: string }> {
    //   check if teams exist

    const homeTeam = await this.clubRepository.findOneByOrFail({
      id: homeTeamId,
    });
    const awayTeam = await this.clubRepository.findOneByOrFail({
      id: awayTeamId,
    });

    //   Update club info for wins, looses, draws

    if (homeTeamScorersIds.length > awayTeamScorersIds.length) {
      // home team has won
      await this.updateWinnerAndLooser(homeTeam, awayTeam);
    } else if (homeTeamScorersIds.length < awayTeamScorersIds.length) {
      // away team has won
      await this.updateWinnerAndLooser(awayTeam, homeTeam);
    } else {
      // they are draw
      await this.updateDraws([homeTeam, awayTeam]);
    }

    // Update player info for scored goals

    // key | value
    // id | no of goals
    //                              player id / no of goals
    const playerScorersMap = new Map<string, number>();

    [...homeTeamScorersIds, ...awayTeamScorersIds].forEach((playerId) => {
      playerScorersMap.set(playerId, (playerScorersMap.get(playerId) || 0) + 1);
    });
    //       [playerId, noOfGoals]
    for (const [playerId, noOfGoals] of playerScorersMap) {
      const player = await this.playerRepository.findOneByOrFail({
        id: playerId,
      });

      await this.playerRepository.update(playerId, {
        goals: player.goals + noOfGoals,
      });
    }

    return { message: 'Score submitted successfully!' };
  }

  private async updateDraws(clubs: Club[]) {
    for (const club of clubs) {
      await this.clubRepository.update(club, {
        draws: club.draws + 1,
      });
    }
  }

  private async updateWinnerAndLooser(winner: Club, looser: Club) {
    await this.clubRepository.update(winner.id, { wins: winner.wins + 1 });
    await this.clubRepository.update(looser.id, {
      losses: looser.losses + 1,
    });
  }
}
