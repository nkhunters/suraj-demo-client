import * as actionTypes from "../actionTypes";

const initialState = {
  company: "",
  sector: "",
  specialization: "",
  technology: "",
  businessModel: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  contactPerson: ""
};

const companyDetailsReducer = (state = initialState, action) => {
  if (action.type === actionTypes.SAVEDETAILS) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default companyDetailsReducer;
