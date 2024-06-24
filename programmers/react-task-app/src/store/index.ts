import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer/reducer.ts";

const store = configureStore({
    reducer
});

export default store

