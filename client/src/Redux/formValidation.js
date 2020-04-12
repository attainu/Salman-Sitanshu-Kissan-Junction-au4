let initialState = {
  registered: false
};

export default function Validate(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {
    case "error":
      stateCopy = payload;
      console.log(stateCopy)
      return stateCopy;
    case "resetError":
      stateCopy.email = stateCopy.password = stateCopy.password2 = stateCopy.mobile = stateCopy.name = null
      console.log(stateCopy)
      return stateCopy;
    case "registered":
      stateCopy.registered = true
      console.log(stateCopy)
      return stateCopy;
  }
  return state;
}