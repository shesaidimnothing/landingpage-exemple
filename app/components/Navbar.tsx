import SearchBar from './SearchBar';
import NavButton from './NavButton';
import DropdownMenu from './DropdownMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et menu à gauche */}
          <div className="flex items-center gap-4">

            <DropdownMenu />
          </div>

          {/* Barre de recherche au centre */}
          <SearchBar />

          {/* Bouton utilisateur à droite */}
          <div className="flex items-center">
            <NavButton iconSrc="/vercel.svg" alt="Utilisateur" />
          </div>
        </div>
      </div>
    </nav>
  );
} 