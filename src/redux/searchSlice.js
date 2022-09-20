import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookData = createAsyncThunk(
  "search/fetchBookData",
  async (search) => {
    // if (search === "") {
    //   return alert("Arama giriniz");
    // } else {
      console.log('search', search);
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&authors:${search}`
      );
      
      console.log("res", res);
      return res.data.items;
    }
  // }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "", //aramadaki değeri alacak
    books: [], //arama yapılınca dolacak
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [fetchBookData.fulfilled]: (state, action) => {
      state.books = action.payload;
      console.log("state.books :>> ", state.books);
      console.log("action.payload", action.payload);
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
