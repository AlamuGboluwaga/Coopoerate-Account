import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { RootState } from "./store"; // Assuming you have a store setup

const api = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}
interface VerificationState {
  loading: boolean;
  customer: User[];
  error: boolean;
}
const initialState: VerificationState = {
  loading: false,
  customer: [],
  error: false,
}
export const customerVerification = createAsyncThunk(
  "verification/customerVerification",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get<User[]>(`${api}/user`);
      return response.data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
);

const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(customerVerification.pending, (state) => {
    return {    ...state,loading : true}
      })
    //   .addCase(
    //     customerVerification.fulfilled,
    //     (state, action: PayloadAction<User[]>) => {
    //       return {...state,loading:false,
    //       customer:action.payload ?? []}
    //     }
    //   )
    //   .addCase(customerVerification.rejected, (state) => {
    //     state.loading = false;
    //     state.error = true;
    //   });
  },
});

// export const selectVerification = (state: RootState) => state.verification;

export default verificationSlice.reducer;
