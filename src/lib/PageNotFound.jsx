import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F4F4F2]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="font-display text-7xl font-bold tracking-tight text-[#0A0A0A]">404</p>
          <div className="h-1 w-16 bg-[#B9FF3C] rounded-full mx-auto" />
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-2xl font-semibold text-[#0A0A0A]">
            Page not found
          </h1>
          <p className="text-[#5A6259] leading-relaxed">
            That page doesn&apos;t exist. Try the calculators or head back home.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0A0A0A] text-[#F4F4F2] hover:bg-[#1a1a1a] transition-colors"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 1 0 01-1 1h-3m-6 0a1 1 1 0 001-1v-4a1 1 1 0 011-1h2a1 1 1 0 011 1v4a1 1 1 0 001 1" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}