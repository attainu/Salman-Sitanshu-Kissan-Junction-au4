// import axios from 'axios';

let Action = {};

Action.register = (data) => {
  return { type: "register", payload: data };
};

Action.login = (data) => {
  if (data.email && data.password) return { type: "login", payload: data };
  else return { type: "" };
};

export default Action;
