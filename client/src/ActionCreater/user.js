import axios from 'axios';

let Action = {};
const link = {
  login: '/user/login',
  user: '/user/',
  token: '/user/tokenverify',
  google: '/user/google',
  companyR: '/company/',
  productR: '/product/',
  userProduct: '/conprd/',
  join: '/join/',
  address: '/address/'
}

const notify = {
  type: "notify",
  payload: {
    type: "warn",
    msg: "All Fields Are Required",
  },
};

Action.join = (id) => {
  return (async (dispatch) => {
    let data = await axios(`${link.join}${id}`);
    if (data.data.id)
      dispatch({
        type: "login", payload: data.data
      })
    else dispatch(notify)
  })
}

Action.register = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.user, data);
    if (value.data.email)
      dispatch({
        type: "register"
      })
    else dispatch(notify)
  })
}

Action.login = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.login, data);
    localStorage.setItem("token", value.data.token);
    if (value.data.data)
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

Action.companyRegister = (data, id) => {
  return (async (dispatch) => {
    let company = await axios.post(link.companyR, data);
    let value = await axios.put(`${link.user}${id}`, { companyId: company.data.id });
    if (value.data[0] = 1)
      dispatch({ type: "register" });
    else dispatch(notify)
  })
}

Action.productregister = (data, id) => {
  return (async (dispatch) => {
    let product = await axios.post(link.productR, data);
    let value = await axios.post(link.userProduct, {
      connectType: 'myproduct',
      userId: id,
      productId: product.data.id
    });
    if (value.data[0] = 1)
      dispatch({ type: "register" });
    else dispatch(notify)
  })
}

Action.profileEdit = (user, address, id, addressId) => {
  return (async (dispatch) => {
    let userData = await axios.put(`${link.user}${id}`, user)
    if (!addressId) {
      let res = await axios.post(link.address, address);
      let value = await axios.put(`${link.user}${id}`, { addressId: res.data.id });
      dispatch(notify)
      console.log('Updated user with address', value)
    } else {
      let res = await axios.put(`${link.address}${addressId}`, address);
      dispatch(notify)
      console.log('Updated address', res)
    }
    // let company = await axios.post(link.companyR, data);
    // if (value.data[0] = 1)
    //   dispatch({ type: "register" });
    // else 
  })
}
// Action.productregister = (data) => {
//   if (
//     data.productType &&
//     data.productName &&
//     data.price &&
//     data.productSize &&
//     data.productDosage &&
//     data.targetplant &&
//     data.description
//   )
//     return { type: "productregister", payload: data };
//   else return notify;
// };

export default Action;
