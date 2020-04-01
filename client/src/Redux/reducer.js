let initialState = {

}

export default function movie(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {


    default: return stateCopy;
  }
}
