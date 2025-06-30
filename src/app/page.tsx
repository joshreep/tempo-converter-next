'use client';

import SubdivisionGrid from '@/components/SubdivisionGrid';
import useTapTempoSubDivision from '@/hooks/useTapTempoSubDivision';
import TouchAppIcon from '@mui/icons-material/TouchAppTwoTone';
import IconButton from '@mui/material/IconButton';
import { ChangeEventHandler } from 'react';

export default function Home() {
  const { handleTap, bpm, setBpm, subdivisions } = useTapTempoSubDivision();

  const handleBpmChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBpm(formatBPM(event.target.value));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Tempo Converter</h1>
        <IconButton color="primary" className="h-40 w-40" onTouchStart={handleTap}>
          <TouchAppIcon fontSize="large" sx={{ fontSize: '4rem' }} />
        </IconButton>
        <input
          id="bpm"
          type="number"
          pattern="\d*"
          className="w-48 text-center text-6xl"
          placeholder="BPM"
          value={bpm === 0 ? '' : bpm}
          onChange={handleBpmChange}
          onFocus={() => setBpm(0)}
        />
      </div>
      <SubdivisionGrid subdivisions={subdivisions} />
    </>
  );
}

function formatBPM(bpm: string) {
  return +`${+bpm.slice(-3)}`; // Limit to last 3 digits
}
