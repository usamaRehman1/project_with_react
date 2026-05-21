import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatedFriendsArray } from "../features/friendsSlipce.js"

function FriendList({ isAddFriendOpen, setIsAddFrienOpen, isSplitOpen, setIsSplitOpen }) {
    const friendsListArr = useSelector((state) => state.friends);
    const dispatch = useDispatch()

    const addFriendModalHandler = () => {
        setIsAddFrienOpen(true)
    }

    const isSplitBillOpen = () => {
        setIsSplitOpen(true)
    }

    const selectFriendHandler = (id) => {
        dispatch(updatedFriendsArray(id))
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Friends</h2>
            <ul className="space-y-4">
                {friendsListArr.map((friend) => (
                    <li key={friend.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full border border-slate-200" />
                            <div>
                                <h3 className="font-semibold text-slate-800">{friend.name}</h3>
                                {friend.balance < 0 && (
                                    <p className="text-xs font-medium text-rose-600">You owe {friend.name} ${Math.abs(friend.balance)}</p>
                                )}
                                {friend.balance > 0 && (
                                    <p className="text-xs font-medium text-emerald-600">{friend.name} owes you ${friend.balance}</p>
                                )}
                                {friend.balance === 0 && (
                                    <p className="text-xs font-medium text-slate-400">You and {friend.name} are even</p>
                                )}
                            </div>
                        </div>
                        <button
                            className={`px-4 py-2 text-white text-xs font-semibold rounded-lg transition-all shadow-sm ${friend.isSplitBillOpen
                                ? "bg-rose-600 hover:bg-rose-700"
                                : "bg-slate-900 hover:bg-slate-800"
                                }`}
                            onClick={() => selectFriendHandler(friend.id)}
                        >
                            {friend.isSplitBillOpen ? "Close" : "Select"}
                        </button>
                    </li>
                ))}
            </ul>

            {
                !isAddFriendOpen
                &&
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]" onClick={addFriendModalHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Friend
                </button>
            }

        </div>
    );
}

export default FriendList