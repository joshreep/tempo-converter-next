'use client';

import { SubdivisionName, SUBDIVISIONS } from '@/constants/subdivisions';
import { useSettings } from '@/contexts/settings';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import type { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CSSProperties, Theme, useTheme } from '@mui/material/styles';
import { useCallback } from 'react';

const MENU_PROPS: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function getStyles(
  key: SubdivisionName,
  selected: readonly SubdivisionName[],
  theme: Theme,
): CSSProperties {
  return {
    fontWeight: selected.includes(key)
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
  };
}

export default function SettingsPage() {
  const theme = useTheme();
  const { enabledSubdivisions, defaultSubdivision, setSettings } = useSettings();

  const handleChange = useCallback(
    (event: SelectChangeEvent<SubdivisionName[]>) => {
      setSettings({
        enabledSubdivisions:
          typeof event.target.value === 'string'
            ? (event.target.value.split(',') as SubdivisionName[])
            : event.target.value,
      });
    },
    [setSettings],
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <FormControl fullWidth>
        <InputLabel id="subdivisions-select-label">Select Subdivisions</InputLabel>
        <Select
          labelId="subdivisions-select-label"
          id="subdivisions-select"
          multiple
          value={enabledSubdivisions ?? []}
          onChange={handleChange}
          input={<OutlinedInput id="subdivisions-select" label="Select Subdivisions" />}
          renderValue={(selected) => {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            );
          }}
          MenuProps={MENU_PROPS}
        >
          {Object.keys(SUBDIVISIONS).map((key) => (
            <MenuItem
              key={key}
              value={key}
              style={getStyles(key as SubdivisionName, enabledSubdivisions, theme)}
            >
              <Checkbox checked={enabledSubdivisions.includes(key as SubdivisionName)} />
              <ListItemText primary={key} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="primary-subdivision-select-label">Primary Subdivision</InputLabel>
        <Select
          labelId="primary-subdivision-select-label"
          id="primary-subdivision-select"
          value={defaultSubdivision ?? ''}
          label="Primary Subdivision"
          onChange={(event) => {
            debugger;
            setSettings({ defaultSubdivision: event.target.value as SubdivisionName });
          }}
        >
          {enabledSubdivisions.map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
