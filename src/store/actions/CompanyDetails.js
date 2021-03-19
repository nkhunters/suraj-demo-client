import * as actionTypes from "../actionTypes";

export const saveCompanyDetails = (details) => {
  return { type: actionTypes.SAVEDETAILS, payload: details };
};
