import { useState } from "react";
import { store } from "../app/store.js"
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from '../features/friendsSlipce.js'

function AddFriendForm({ isAddFriendOpen, setIsAddFrienOpen }) {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('')

    const state = useSelector(
        (state) => state.friends
    )
    const dispatch = useDispatch()

    const addFriendHendler = (e) => {
        e.preventDefault()
        const newFriend = { id: Date.now(), name, balance: 0, avatar: imageUrl, isSplitBillOpen: false }
        dispatch(addFriend(newFriend))
        setName('')
        setimageUrl('')
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Add a new friend</h2>
            <form className="space-y-4" onSubmit={addFriendHendler}>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Friend Name</label>
                    <input
                        type="text"
                        value = {name}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm transition-all"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Image URL</label>
                    <input
                        type="text"
                        value={imageUrl}
                        placeholder="https://i.pravatar.cc/48"
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm transition-all text-slate-400"
                        onChange={(e) => setimageUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm" >
                    Add Friend
                </button>
            </form>
        </div>
    );
}

export default AddFriendForm