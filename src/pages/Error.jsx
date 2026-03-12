import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-white/50">
      <div className="relative isolate">
        <h1 className="text-[120px] sm:text-[200px] font-extrabold tracking-tighter text-slate-100/80 drop-shadow-sm select-none leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#3563E9] px-4 sm:px-6 py-2 rounded-lg transform -rotate-6 shadow-xl border-2 border-white/20 backdrop-blur-sm">
            <span className="text-white text-sm sm:text-base font-bold tracking-widest uppercase">
              Page Not Found
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          Oops! You seem to be lost.
        </h2>
        <p className="text-slate-500 max-w-md text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link 
          to="/" 
          className="mt-4 px-8 py-3.5 bg-[#3563E9] text-white rounded-xl font-semibold hover:bg-[#2049c8] transition-all duration-300 shadow-[0_4px_14px_0_rgba(53,99,233,0.39)] hover:shadow-[0_6px_20px_rgba(53,99,233,0.23)] hover:-translate-y-0.5 active:translate-y-0"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;