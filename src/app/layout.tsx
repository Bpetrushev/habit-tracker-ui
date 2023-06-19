import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Habit Tracker',
  description: 'Habit Tracker - ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
