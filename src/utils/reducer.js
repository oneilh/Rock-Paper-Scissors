export const initialState = {
  playerName: "Guest001",
  playerScore: 0,
  computerScore: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYERNAME":
      return { ...state, playerName: (action.payload).toUpperCase()};
    default:
      return state;
  }
};
