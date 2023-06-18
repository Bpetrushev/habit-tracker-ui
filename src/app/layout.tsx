import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'TaskUnity',
  description:
    'TaskUnity - Streamline Your Tasks and Boost Productivity with Our Powerful Task Management App. Create Boards, Sections, and Tasks for Efficient Organization. Stay on Top of Deadlines and Collaborate Seamlessly. Download Now and Take Control of Your Workflow!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
