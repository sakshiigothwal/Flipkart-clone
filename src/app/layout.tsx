import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { Roboto } from 'next/font/google';
import './globals.css';
import LayoutWrap from '../components/Layout1';

export const metadata = {
  title: 'Flipkart Clone',
  description: 'Search and view product details',
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-light`} style={{ minHeight: '100vh' }}>
        <Navbar />
        <LayoutWrap>{children}</LayoutWrap>
      </body>
    </html>
  );
}
