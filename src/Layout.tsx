// Component that defines the layout for each page, adding Header and Footer

import Header from './Header.tsx';
import Nav from './Nav.tsx';
import Footer from './Footer.tsx';
import { Outlet } from 'react-router-dom'; 

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header /> 
      <Nav />
      
      <main className="flex-grow">
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
}