import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // { id: 1, name: "Clark", balance: -7, avatar: "https://i.pravatar.cc/48?u=clark", isSplitBillOpen: false },
    // { id: 2, name: "Sarah", balance: 20, avatar: "https://i.pravatar.cc/48?u=sarah", isSplitBillOpen: false },
    // { id: 3, name: "Anthony", balance: 0, avatar: "https://i.pravatar.cc/48?u=anthony", isSplitBillOpen: false },
]

const usersSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        updatedFriendsArray: (state, action) => {
            return state.map((friend) =>
                friend.id == action.payload
                    ? {
                        ...friend,
                        isSplitBillOpen: !friend.isSplitBillOpen,
                    }
                    : {
                        ...friend,
                        isSplitBillOpen: false,
                    }
            );
        },
        updateFriendBlance: (state, action) => {
            return state.map((friend) =>
                friend.id === action.payload.id
                    ? {
                        ...friend,
                        balance: action.payload.balance,
                    }
                    : friend)
        },
        addFriend: (state, action) => [...state, action.payload],
    }
})

export const { addFriend, updatedFriendsArray, updateFriendBlance } = usersSlice.actions;
export default usersSlice.reducer;