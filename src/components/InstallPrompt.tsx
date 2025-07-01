'use client';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FC, ReactElement, Ref } from 'react';

declare global {
  interface Window {
    MSStream?: MSStream;
  }
  type MSStream = unknown;
}

const isIOS =
  typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const isStandalone =
  typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches;

const isProd = process.env.NODE_ENV === 'production';

const Transition: FC<TransitionProps & { children: ReactElement<unknown>; ref: Ref<unknown> }> = (
  props,
) => <Slide direction="up" {...props} />;

const isTestFlagEnabled = process.env.NEXT_PUBLIC_TEST_INSTALL_PROMPT === 'true';

const InstallPrompt: FC = () => {
  return (
    <Dialog
      fullScreen
      open={isTestFlagEnabled || (isProd && !isStandalone)}
      slots={{ transition: Transition }}
      slotProps={{ paper: { className: 'justify-center' } }}
    >
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <DialogTitle>Install App</DialogTitle>
        {isIOS && (
          <p className="align-middle">
            To install this app on your iOS device, tap the{' '}
            <span className="inline-block">
              share button <IosShareIcon color="primary" />
            </span>{' '}
            and then{' '}
            <span className="inline-block">
              {' '}
              &ldquo;Add to Home Screen&rdquo; <AddBoxOutlinedIcon />
            </span>
          </p>
        )}
      </Box>
    </Dialog>
  );
};

export default InstallPrompt;
