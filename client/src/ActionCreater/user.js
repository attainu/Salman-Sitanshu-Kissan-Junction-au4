import axios from "axios";

let Action = {};
const link = {
  login: "/user/login",
  user: "/user/",
  token: "/user/tokenverify",
  google: "/user/google",
  companyR: "/company/",
  productR: "/product/",
  userProduct: "/conprd/",
  join: "/join/",
  address: "/address/",
  seller: "/join/product/"
};

const notify = {
  type: "notify",
  payload: {
    type: "warn",
    msg: "Some Error",
  },
};

Action.join = (id) => {
  return async (dispatch) => {
    let data = await axios(`${link.join}${id}`);
    if (data.data.id)
      dispatch({
        type: "login",
        payload: data.data,
      });
    else dispatch(notify);
  };
};

Action.register = (data) => {
  return (async (dispatch) => {
    try {
      let value = await axios.post(link.user, data);
      if (value.data.email) {
        dispatch({ type: "registered" });
        dispatch({
          type: "resetError",
        })
      }
      else dispatch({
        type: "notify",
        payload: {
          type: "warn",
          msg: "Email or Mobile Already in Use",
        }
      })
    }
    catch (error) {
      dispatch({
        type: "error",
        payload: error.response.data,
      });
    }
  });
};

Action.login = (data) => {
  return async (dispatch) => {
    try {
      let value = await axios.post(link.login, data);
      localStorage.setItem("token", value.data.token);
      if (value.data.data) {
        dispatch({
          type: "login",
          payload: value.data.data,
        });
        dispatch({
          type: "resetError",
        })
      }
      else dispatch({
        type: "warn",
        msg: "Some Error",
      });
    }
    catch (error) {
      dispatch({
        type: "error",
        payload: error.response.data,
      });
    }
  };
};

Action.google = (data) => {
  return async (dispatch) => {
    let value = await axios.post(link.google, data);
    localStorage.setItem("token", value.data.token);
    if (value.data.data)
      dispatch({
        type: "login",
        payload: value.data.data,
      });
    else dispatch(notify);
  };
};

Action.token = (token) => {
  return async (dispatch) => {
    let data = await fetch(link.token, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    data = await data.json();
    if (data) {
      dispatch({
        type: "login",
        payload: data,
      });
    } else dispatch({ type: "" });
  };
};

Action.logout = () => {
  localStorage.removeItem("token");
  return { type: "logout" };
};

Action.companyRegister = (data, id) => {
  return async (dispatch) => {
    let company = await axios.post(link.companyR, data);
    let value = await axios.put(`${link.user}${id}`, {
      companyId: company.data.id,
    });
    if ((value.data[0] = 1)) dispatch({ type: "register" });
    else dispatch(notify);
  };
};

Action.productregister = (data, id) => {
  return async (dispatch) => {
    let product = await axios.post(link.productR, data);
    let value = await axios.post(link.userProduct, {
      connectType: "myproduct",
      userId: id,
      productId: product.data.id,
    });
    if ((value.data[0] = 1)) dispatch({ type: "register" });
    else dispatch(notify);
  };
};

Action.profileEdit = (user, address, id, addressId) => {
  return async (dispatch) => {
    let userData = await axios.put(`${link.user}${id}`, user);
    if (!addressId) {
      let res = await axios.post(link.address, address);
      let value = await axios.put(`${link.user}${id}`, {
        addressId: res.data.id,
      });
      dispatch(notify);
    } else {
      let res = await axios.put(`${link.address}${addressId}`, address);
      dispatch(notify);
    }
  };
};

Action.addCart = (userId, productId) => {
  return async (dispatch) => {
    try {
      console.log("Cart Adding", userId, productId)
      let middleT = await axios(`${link.userProduct}user/${userId}/${productId}`)
      console.log("Working", middleT)
      if (middleT.data) {
        let userProduct = await axios.put(`${link.userProduct}${middleT.data.id}`, {
          status: false,
          count: parseInt(middleT.data.count) + 1
        });
        console.log(userProduct)
      }
      else {
        let value = await axios.post(link.userProduct, {
          connectType: "booked",
          userId: userId,
          productId: productId,
          count: 1
        });
        console.log("Cart Added", value)
      }
      // if ((value.data[0] = 1)) dispatch({ type: "register" });
      // else dispatch(notify);
      // let product = await axios.post(link.productR, data);
      // let value = await axios.post(link.userProduct, {
      //   connectType: "myproduct",
      //   userId: id,
      //   productId: product.data.id,
      // });
      // if ((value.data[0] = 1)) dispatch({ type: "register" });
      // else 
      dispatch({
        type: "notify",
        payload: {
          type: "success",
          msg: "Added To Cart",
        }
      });
    }
    catch (err) {
      dispatch(notify);
    }
  };
};

Action.placeOrder = (userId, productIds) => {
  return async (dispatch) => {
    try {
      await Promise.all(productIds.map(async (id) => {
        let userProduct = await axios.put(`${link.userProduct}${id}`, {
          connectType: "booked",
          status: true
        });
        console.log("0", id, userProduct)
        if (userProduct.data) {
          let product = await axios(`${link.userProduct}product/${userId}/${id}`)
          console.log("1", product)
          let seller = await axios(`${link.seller}${product.data.product.id}`);
          console.log("2", seller)
          let connectedP = await axios(`${link.userProduct}${seller.data.connect_products[0].id}`);
          console.log("3", connectedP)
          let sellerProduct = await axios.put(`${link.userProduct}${seller.data.connect_products[0].id}`, {
            status: true,
            count: parseInt(connectedP.data.count) + 1
          });
          console.log("Trueee", sellerProduct)

        }
        // await axios.put(`${link.userProduct}${seller.connect_products.user.id}`, {
        //   status: true,
        // });
      }))
      dispatch({
        type: "notify",
        payload: {
          type: "success",
          msg: "Placed Succefully",
        }
      });
    }
    catch (err) {
      dispatch(notify);
    }
  }
}

export default Action;
