import { ACTIONS } from "./constants";

export const initialState = {
  playerName: "Guest001",
  playerScore: 0,
  computerScore: 0,
  roundResult: "",
  roundStatus: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DRAW:
      return { ...state, roundStatus: "DRAW", roundResult: "It's a Draw 🤝" };
    case ACTIONS.PLAYERNAME:
      return { ...state, playerName: action.payload.toUpperCase() };
    case ACTIONS.PLAYERWIN:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        roundStatus: "PLAYER_WIN",
        roundResult: "You Win 😎",
      };
    case ACTIONS.COMPUTERWIN:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        roundStatus: "COMPUTER_WIN",
        roundResult: "Computer Win 😔",
      };
    case ACTIONS.RESET:
      return {
        ...state,
        playerScore: 0,
        computerScore: 0,
        roundResult: "",
        roundStatus: "",
      };
    default:
      return state;
  }
};
