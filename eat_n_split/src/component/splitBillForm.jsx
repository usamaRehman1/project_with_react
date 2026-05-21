import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFriendBlance } from "../features/friendsSlipce";

export function SplitBillForm() {

    const [totalBillValue, setTotalBillValue] = useState("");
    const [yourExpence, setYourExpence] = useState("");
    const [paidBillBy, setPaidBillBy] = useState("you");

    const friendsListArr = useSelector((state) => state.friends);
    const dispatch = useDispatch();

    const activeFriend = friendsListArr.find(friend => friend.isSplitBillOpen)

    const handleChange = (e) => {
        e.preventDefault()
        const friendExpense = Number(totalBillValue) - Number(yourExpence);
        if (paidBillBy === "you") {
            // Your friend owes you
            dispatch(
                updateFriendBlance({
                    id: activeFriend.id,
                    balance: activeFriend.balance + friendExpense
                })
            );
        } else {
            // You owe your friend
            dispatch(
                updateFriendBlance({
                    id: activeFriend.id,
                    balance: activeFriend.balance - yourExpence
                })
            );
        }

        setTotalBillValue("")
        setYourExpence("")
        setPaidBillBy("you")
    }

    return (
        activeFriend?.isSplitBillOpen ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Split a bill with {activeFriend.name}</h2>

                <form className="space-y-5" onSubmit={handleChange}>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Bill Value</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                            <input
                                type="number" className="w-full pl-8 pr-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
                                value={totalBillValue}
                                onChange={(e) => setTotalBillValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Your Expense</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                            <input
                                type="number" className="w-full pl-8 pr-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
                                value={yourExpence}
                                onChange={(e) => setYourExpence(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{activeFriend.name}'s Expense</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                            <input
                                type="number" disabled className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-400 cursor-not-allowed" placeholder="Calculated automatically"
                                value={
                                    totalBillValue && yourExpence
                                        ? totalBillValue - yourExpence
                                        : ""
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Who is paying the bill?</label>
                        <select className="w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm bg-white" onChange={(e) => setPaidBillBy(e.target.value)}>
                            <option>You</option>
                            <option>{activeFriend.name}</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full mt-2 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all shadow-md">
                        Split Bill
                    </button>
                </form>
            </div>
        ) : (
            <h1>Not selected</h1>
        )
    );
}

export default SplitBillForm