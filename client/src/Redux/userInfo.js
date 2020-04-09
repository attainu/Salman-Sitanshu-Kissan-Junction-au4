let initialState = {
  name: undefined,
  email: undefined,
  mobile: undefined,
  password: undefined,
  Authenticated: false,
  role: undefined,
};

export default function user(state = initialState, action) {
  console.log(action);
  let stateCopy = JSON.parse(JSON.stringify(state));

  const { type, payload } = action;
  switch (type) {
    case "register":
      stateCopy.name = payload.name;
      stateCopy.email = payload.email;
      stateCopy.password = payload.password;
      stateCopy.mobile = payload.mobile;
      stateCopy.role = payload.role;
      console.log("State", stateCopy);
      return stateCopy;

    case "login":
      if (
        payload.password === stateCopy.password &&
        payload.email == stateCopy.email
      )
        stateCopy.Authenticated = true;
      console.log("State", stateCopy);
      return stateCopy;

    default:
      return stateCopy;
  }
}
