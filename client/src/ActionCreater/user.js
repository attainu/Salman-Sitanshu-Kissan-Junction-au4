import axios from 'axios';

let Action = {};
const link = {
  login: '/user/login',
  register: '/user/',
  token: '/user/tokenverify',
  google: '/user/google',
  userUpdate: '/user/',
  companyR: '/company/',
  productR: '/product/',
  userProduct: '/conprd/',
  join: '/join/'
}

const notify = {
  type: "notify",
  payload: {
    type: "warn",
    msg: "All Fields Are Required",
  },
};

Action.join = (id) => {
  console.log('came here', id)
  return (async (dispatch) => {
    console.log('came here')
    let data = await axios(`${link.join}${id}`);
    console.log('Joinn', data)
    if (data.data.id)
      dispatch({
        type: "login", payload: data.data
      })
    else dispatch(notify)
  })
}

Action.register = (data) => {
  return (async (dispatch) => {
    let value = await axios.post(link.register, data);
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

Action.companyRegister = (data, id) => {
  console.log('Company', id)
  return (async (dispatch) => {
    let company = await axios.post(link.companyR, data);
    console.log('After post comapny', company.data.id)
    let value = await axios.put(`${link.userUpdate}${id}`, { companyId: company.data.id });
    console.log('Udated user', value.data)
    if (value.data[0] = 1)
      dispatch({ type: "register" });
    else dispatch(notify)
  })
}

Action.productregister = (data, id) => {
  console.log('Product', id)
  return (async (dispatch) => {
    let product = await axios.post(link.productR, data);
    console.log('After post product', product.data.id)
    let value = await axios.post(link.userProduct, {
      connectType: 'myproduct',
      userId: id,
      productId: product.data.id
    });
    console.log('Udated UserProduct', value)
    if (value.data[0] = 1)
      dispatch({ type: "register" });
    else dispatch(notify)
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
