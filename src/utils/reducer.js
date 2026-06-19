import { ACTIONS } from "./constants";

export const initialState = {
  playerName: "Guest001",
  playerScore: 0,
  computerScore: 0,
  seriesScore: 0,
  roundResult: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DRAW:
      return { ...state, roundResult: "It's a Draw 🤝" };
    case ACTIONS.PLAYERNAME:
      return { ...state, playerName: action.payload.toUpperCase() };
    case ACTIONS.PLAYERWIN:
      const updatedPlayerScore = state.playerScore + 1;
      return {
        ...state,
        playerScore: updatedPlayerScore,
        seriesScore: updatedPlayerScore + state.computerScore,
        roundResult: "You Win 😎",
      };
    case ACTIONS.COMPUTERWIN:
      const updatedComputerScore = state.computerScore + 1;
      return {
        ...state,
        computerScore: updatedComputerScore,
        seriesScore: state.playerScore + updatedComputerScore,
        roundResult: "Computer Win 😔",
      };
    case ACTIONS.RESET:
      return {
        ...state,
        playerScore: 0,
        computerScore: 0,
        seriesScore: 0,
      };
    default:
      return state;
  }
};
