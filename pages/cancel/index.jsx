'use client';

import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

const CancelPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-10 space-y-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Fumble!
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            You've cancelled your payment.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <svg
              className="w-24 h-24 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-md dark:text-gray-300">
              Don't let this be a turnover! You were so close to scoring.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/" passHref>
              <Button
                variant="contained"
                fullWidth
                className="text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Return to Home Field
              </Button>
            </Link>
          </div>

          <div className="mt-4">
            <Link href="/pricing" passHref>
              <Button
                variant="outlined"
                fullWidth
                className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
              >
                Review Game Plan (Pricing)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
