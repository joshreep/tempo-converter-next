'use client';

import SubdivisionGrid from '@/components/SubdivisionGrid';
import useTapTempoSubDivision from '@/hooks/useTapTempoSubDivision';
import { ChangeEventHandler } from 'react';

export default function Home() {
  const { handleTap, bpm, setBpm, subdivisions } = useTapTempoSubDivision();

  const handleBpmChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBpm(formatBPM(event.target.value));
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Tempo Converter</h1>
      <button
        type="button"
        className="rounded-full text-3xl h-35 w-35 text-blue-600 border-blue-600 border-4 active:bg-blue-200 dark:active:bg-blue-950 active:scale-110 transition-[scale] duration-75 ease-out"
        style={{ userSelect: 'none' }}
        onTouchStart={handleTap}
      >
        TAP
      </button>
      <input
        type="number"
        pattern="\d*"
        className="text-6xl text-center w-48"
        placeholder="BPM"
        value={bpm}
        onChange={handleBpmChange}
      />
      <SubdivisionGrid subdivisions={subdivisions} />
    </>
  );
}

function formatBPM(bpm: string) {
  return +`${+bpm.slice(-3)}`; // Limit to last 3 digits
}
