import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsappButton } from './WhatsappButton';
import { ScrollToHash } from './ScrollToHash';

export function Layout() {
  return (
    <div className="bg-bg text-text">
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
