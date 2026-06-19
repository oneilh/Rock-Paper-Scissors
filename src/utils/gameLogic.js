import { WEAPONS, ACTIONS } from './constants';

export const determineWinner = (player, computer) => {
  if (player === computer) {
    return ACTIONS.DRAW;
  }
  if (
    (player === WEAPONS.ROCK && computer === WEAPONS.SCISSORS) ||
    (player === WEAPONS.SCISSORS && computer === WEAPONS.PAPER) ||
    (player === WEAPONS.PAPER && computer === WEAPONS.ROCK)
  ) {
    return ACTIONS.PLAYERWIN;
  }
  return ACTIONS.COMPUTERWIN;
};
