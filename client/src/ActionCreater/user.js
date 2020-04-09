import axios from 'axios';

let Action = {};
const link = {
  login: 'http://localhost:5000/user/login',
  register: 'http://localhost:5000/user/',
  token: 'http://localhost:5000/user/tokenverify',
  google: 'http://localhost:5000/user/google'
}

const notify = {
  type: "notify",
  payload: {
    type: "warn",
    msg: "All Fields Are Required",
  },
};

Action.register = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.register, data);
    if (value.data.email)
      dispatch({
        type: "register", payload: value.data
      })
    else dispatch(notify)
  })
}

Action.login = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.login, data);
    localStorage.setItem("token", value.data.token);
    console.log('Login', value.data.data)
    if (value.data)
      dispatch({
        type: "login", payload: value.data.data
      })
    else dispatch(notify)
  })
}

Action.google = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.google, data);
    localStorage.setItem("token", value.data.token);
    if (value.data.data)
      dispatch({
        type: "login", payload: value.data.data
      })
    else dispatch(notify)
  })
}

Action.token = (token) => {
  console.log('Token 1', token)
  return (async (dispatch) => {
    let data = await fetch(link.token, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    data = await data.json();
    console.log('Token 2', data)
    if (data) {
      dispatch({
        type: "login", payload: data
      })
    }
    else dispatch({ type: '' })
  })
}

Action.logout = () => {
  localStorage.removeItem("token")
  return { type: "logout" };
};

Action.companyRegister = (data) => {
  if (
    data.companyname &&
    data.gstnumber &&
    data.type &&
    data.adress1 &&
    data.city &&
    data.statename &&
    data.district &&
    data.pincode
  )
    return { type: "company-register", payload: data };
  else return notify;
};

export default Action;
