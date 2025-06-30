'use client';

import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SettingsIcon from '@mui/icons-material/SettingsTwoTone';
import TouchAppIcon from '@mui/icons-material/TouchAppTwoTone';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavBar = () => {
  const pathname = usePathname();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation component="footer" showLabels value={pathname}>
        <BottomNavigationAction
          LinkComponent={Link}
          label="Converter"
          icon={<TouchAppIcon />}
          href="/"
          value="/"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          label="Set List"
          icon={<FormatListBulletedTwoToneIcon />}
          href="/set-list"
          value="/set-list"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          label="Settings"
          icon={<SettingsIcon />}
          href="/settings"
          value="/settings"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
