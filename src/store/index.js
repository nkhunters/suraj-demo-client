import { createStore, combineReducers } from "redux";
import companyDetailsReducer from "./reducers/CompanyDetails";

const rootReducer = combineReducers({
  companyDetails: companyDetailsReducer,
});
const store = createStore(rootReducer);

export default store;
