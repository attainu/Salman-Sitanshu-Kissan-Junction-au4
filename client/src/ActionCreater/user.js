// import axios from 'axios';

let Action = {};

Action.register = (data) => {
  if (data.name && data.email && data.password && data.mobile) {
    console.log(data, 'hello')
    return { type: "register", payload: data }
  }
  else return {type: ""}
}

Action.login = (data) => {
  if (data.email && data.password)
    return { type: "login", payload: data }
  else return {type: ""}
}

export default Action;