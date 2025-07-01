import './globals.css';

import BottomNavBar from '@/components/BottomNavBar';
import InstallPrompt from '@/components/InstallPrompt';
import { SettingsProvider } from '@/contexts/settings';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tempo Converter',
  description: 'A simple tool to convert bpm to ms with tap tempo.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(geistSans.variable, 'flex h-svh flex-col antialiased')}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <SettingsProvider>
              <main className="mb-[56px] flex grow flex-col items-center justify-center gap-8 p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
                {children}
                <InstallPrompt />
              </main>
              <BottomNavBar />
            </SettingsProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
