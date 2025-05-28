import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthProps = {
    isLoggedIn: boolean;
}

const initialState: AuthProps = {
    isLoggedIn: !!localStorage.getItem('pr-mosh-test')
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserStatus: (state:AuthProps, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        }
    }
})

export const { setUserStatus } = authSlice.actions;
export default authSlice.reducer;