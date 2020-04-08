// import axios from 'axios';

let Action = {};

const notify = {
  type: 'notify',
  payload: {
    type: 'warn',
    msg: 'All Fields Are Required'
  }
}

Action.register = (data) => {
  if (data.name && data.email && data.password && data.mobile) {
    console.log(data, 'hello')
    return { type: "register", payload: data }
  }
  else return notify;
}

Action.login = (data) => {
  if (data.email && data.password)
    return { type: "login", payload: data }
  else return notify;
}

Action.logout = () => {
  return { type: "logout" }
}

Action.companyRegister = (data) => {
  if (data.companyname &&
    data.gstnumber &&
    data.type &&
    data.adress1 &&
    data.city &&
    data.statename &&
    data.district &&
    data.pincode)
    return { type: 'company-register', payload: data }
  else return notify;
}

export default Action;