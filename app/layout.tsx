import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import localFont from 'next/font/local';
const Jakarta = localFont({
  src: 'Ambit-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'KnowYourDharma',
  description: `We are a group of people who are working to revive the culture and heritage of India. 
    Spread the truth about Hinduism. We also Bust the Myths about Hinduism.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>
        <div className="text-black bg-white dark:text-white dark:bg-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
