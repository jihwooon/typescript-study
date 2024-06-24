import {loggerReducer} from "../slices/loggerSlice.ts";
import {boardReducer} from "../slices/boardSlice.ts";
import {modalReducer} from "../slices/modalSlice.ts";

const reducer = {
    logger: loggerReducer,
    board: boardReducer,
    modal: modalReducer,
}

export default reducer;
