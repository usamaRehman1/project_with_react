import React, { useState } from 'react';
import FriendList from './component/friendsList';
import AddFriendForm from './component/addFriend';
import SplitBillForm from './component/splitBillForm';
import { addFriend } from "./features/friendsSlipce.js"

export default function App() {
  const [isAddFriendOpen, setIsAddFrienOpen] = useState(false);
  const [isSplitOpen, setIsSplitOpen] = useState(false);

  return (
    // Main full-screen wrapper with a nice subtle background
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">

      {/* Container holding both columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN: Friend List & Add Friend Form */}
        {/* h-[calc(100vh-4rem)] keeps it within the screen height, overflow-y-auto makes it scrollable */}
        <div className="md:col-span-5 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto pr-2 scrollbar-thin">
          < div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
            <FriendList
              isAddFriendOpen={isAddFriendOpen}
              setIsAddFrienOpen={setIsAddFrienOpen}
              isSplitOpen={isSplitOpen}
              setIsSplitOpen={setIsSplitOpen}
            />

          </div>
          {
            isAddFriendOpen
            &&
            < div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
              <AddFriendForm
                isAddFriendOpen={isAddFriendOpen}
                setIsAddFrienOpen={setIsAddFrienOpen}
              />
            </div>
          }
        </div>

        {/* RIGHT COLUMN: Split Bill Form */}
        {/* md:sticky top-8 keeps the form locked in place on the right side while you scroll friends */}
          <div className="md:col-span-7 md:sticky md:top-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SplitBillForm />
          </div>
      </div>

    </div >
  );
}