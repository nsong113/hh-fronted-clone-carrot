import { createSlice } from '@reduxjs/toolkit';
//initial state
const initialState = {
  input: '',
};

//reducer
const counterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      //state를 변경하는 로직을 수행
      //   console.log(state);
      state.input = action.payload;
    },
  },
});

//export
const { setInputValue } = counterSlice.actions;
export { setInputValue };
export default counterSlice.reducer;
