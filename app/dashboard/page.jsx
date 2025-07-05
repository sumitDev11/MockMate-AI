"use client";

import React from 'react';
import { useUser, UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation'; // ✅ Make sure to import this
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
  const { user, isLoaded } = useUser();

  // Show loading while user is being fetched
  if (!isLoaded) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // Redirect if not signed in
  if (!user) {
    redirect("/sign-in"); // ✅ This will now work
  }

  return (
    <div className='p-10 max-w-7xl mx-auto'>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div>
          <h2 className='font-bold text-2xl'>Dashboard</h2>
          <p className='text-gray-500 mt-1'>
            Welcome, {user.firstName || 'Interviewer'} (
            {user.primaryEmailAddress?.emailAddress || 'No email'})
          </p>
        </div>
        <UserButton afterSignOutUrl='/' />
      </div>

      <h2 className='text-gray-500 mb-4'>Create and Start your AI Mockup Interview</h2>

      {/* Add New Interview */}
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <div className="min-h-[200px] h-full w-full p-6">
          <AddNewInterview />
        </div>
      </div>

      {/* Interview History */}
      <InterviewList />
    </div>
  );
}

export default Dashboard;
