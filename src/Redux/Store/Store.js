import { createStore } from "redux";
import rootred from "../Reducers/Main";


const store = createStore(
    rootred
);

export default store;