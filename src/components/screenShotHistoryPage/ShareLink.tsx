"use client";

import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState, useRef } from "react";

const ShareToast = () => {
  const [copy, setCopy] = useState(false);
  const [progressComplete, setProgressComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleProgressComplete = () => {
    setProgressComplete(true);
  };

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        setCopy(true);
      });
    }
  };

  return (
    <>
      <div className='w-full relative py-6 p-4'>
        <h4 className='text-base font-semibold text-dark'>
          {!progressComplete
            ? "Generating your Link... Please wait."
            : " Link generated successfully! Share it link"}
        </h4>
        <div className='relative rounded-xl flex items-center mt-4 min-h-[54px] px-4 bg-light w-full border '>
          <input
            ref={inputRef}
            readOnly
            className='w-full px-0.5 outline-none text-dark bg-transparent'
            type='text'
            value='https://similarwatch.com/tv/english-teacher-2024/trailer/'
          />
          <button
            className={cn(
              "absolute text-sm font-medium -translate-y-1/2 top-1/2 right-2 min-h-[36px] bg-brand-default  bg-[#f4f4f4] text-black rounded-3xl disabled:cursor-not-allowed px-4 transition duration-150 flex items-center gap-2",
              progressComplete && "bg-black text-white"
            )}
            disabled={!progressComplete}
            onClick={handleCopy}
          >
            {copy ? (
              "Copied"
            ) : (
              <>
                {" "}
                <Copy size={16} className='!fill-none ' /> Copy
              </>
            )}
          </button>
        </div>
      </div>
      <ProgressBar text onProgressComplete={handleProgressComplete} />
    </>
  );
};

export default ShareToast;
