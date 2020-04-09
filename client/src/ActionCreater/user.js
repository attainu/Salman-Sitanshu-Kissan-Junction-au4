import axios from 'axios';

let Action = {};
const link = {
  login: 'http://localhost:5000/user/login',
  register: 'http://localhost:5000/user/',
  token: 'http://localhost:5000/user/tokenverify',
}

const notify = {
  type: "notify",
  payload: {
    type: "warn",
    msg: "All Fields Are Required",
  },
};

Action.register = (data) => {
  console.log('Register', data)
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
    if (value.data.user.length)
      dispatch({
        type: "login", payload: value.data.user[0]
      })
    else dispatch(notify)
  })
}

Action.token = (token) => {
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
    console.log('Tpkrn', data)
    if (data.user) {
      dispatch({
        type: "login", payload: data.user[0]
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
