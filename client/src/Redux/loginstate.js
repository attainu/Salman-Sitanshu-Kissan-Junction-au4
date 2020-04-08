let appState = {
  user: {},
  isloggedin: false,
};

function checkLogin(state = appState, action) {
  let stateCopy = JSON.parse(JSON.stringify(appState));
  console.log("Actions here", action);
  switch (action.type) {
    case "SetUser":
      stateCopy.todo.user = action.payload;
      return stateCopy;
  }
  return state;
}
export default checkLogin;
