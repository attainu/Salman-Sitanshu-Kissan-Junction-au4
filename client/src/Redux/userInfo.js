let initialState = {
  name: undefined,
  email: "1",
  mobile: undefined,
  password: "1",
  Authenticated: false,
  role: undefined,

  companyname: undefined,
  gstnumber: undefined,
  type: undefined,
  adress1: undefined,
  city: undefined,
  statename: undefined,
  district: undefined,
  pincode: undefined,
};

export default function user(state = initialState, action) {
  console.log(action);
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {
    case "register":
      stateCopy.name = payload.name;
      stateCopy.email = payload.email;
      stateCopy.password = payload.password;
      stateCopy.mobile = payload.mobile;
      stateCopy.role = payload.role;
      console.log("State", stateCopy);
      return stateCopy;

    case "login":
      console.log(payload);
      if (
        payload.password === stateCopy.password &&
        payload.email == stateCopy.email
      )
        stateCopy.Authenticated = true;
      console.log("State", stateCopy);
      return stateCopy;

    case "logout":
      stateCopy.Authenticated = false;
      stateCopy.name = "";
      stateCopy.email = "";
      stateCopy.password = "";
      stateCopy.mobile = "";
      console.log("State", stateCopy);
      return stateCopy;

    case "company-register":
      console.log("Payload", payload);
      stateCopy.companyname = payload.companyname;
      stateCopy.gstnumber = payload.gstnumber;
      stateCopy.type = payload.type;
      stateCopy.adress1 = payload.adress1;
      stateCopy.city = payload.city;
      stateCopy.statename = payload.statename;
      stateCopy.district = payload.district;
      stateCopy.pincode = payload.pincode;
      console.log("State", stateCopy);
      return stateCopy;

    default:
      return stateCopy;
  }
}
