export const initialState = {
  playerName: "Guest001",
  playerScore: 0,
  computerScore: 0,
  seriesScore: 0,
  roundResult: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "DRAW":
      return { ...state, roundResult: "It's a Draw 🤝" };
    case "PLAYERNAME":
      return { ...state, playerName: action.payload.toUpperCase() };
    case "PLAYERWIN":
      const updatedPlayerScore = state.playerScore + 1;
      return {
        ...state,
        playerScore: updatedPlayerScore,
        seriesScore: updatedPlayerScore + state.computerScore,
        roundResult: "You Win 😎",
      };
    case "COMPUTERWIN":
      const updatedComputerScore = state.computerScore + 1;
      return {
        ...state,
        computerScore: updatedComputerScore,
        seriesScore: state.playerScore + updatedComputerScore,
        roundResult: "Computer Win 😔",
      };
    case "RESET":
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
