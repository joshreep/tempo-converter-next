'use client';

import { DEFAULT_SETTINGS, SubdivisionName } from '@/constants/subdivisions';
import usePersistedState from '@/hooks/usePersistedState';
import { createContext, FC, PropsWithChildren, use, useCallback } from 'react';

export type Settings = {
  enabledSubdivisions: SubdivisionName[];
  defaultSubdivision: SubdivisionName;
};

const SettingsContext = createContext<
  Settings & {
    setSettings: (newValue: Partial<Settings>) => void;
  }
>({ ...DEFAULT_SETTINGS, setSettings: () => undefined });

export function useSettings() {
  return use(SettingsContext);
}

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [settings, setSettings] = usePersistedState('settings', DEFAULT_SETTINGS);

  const handleSetSettings = useCallback(
    (newValue: Partial<Settings>) => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        ...newValue,
      }));
    },
    [setSettings],
  );

  return (
    <SettingsContext.Provider value={{ ...settings, setSettings: handleSetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
