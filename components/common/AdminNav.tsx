import { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  HomeIcon,
  UsersIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Users', href: '/admin/users', icon: UsersIcon },
  {
    name: 'Posts',
    href: '/admin/posts',
    icon: DocumentTextIcon,
  },
  {
    name: 'Comments',
    href: '/admin/comments',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

interface Props {
  navItems: { name: string; icon: SVGSVGElement | any; href: string }[];
}

const NAV_OPEN_WIDTH = 'w-60';
const NAV_CLOSED_WIDTH = 'w-14';
const NAV_VISIBILITY = 'nav-visibility';

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleNav = (visibility: boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) return;

    const { classList } = currentNav;
    if (visibility) {
      // hide our nav
      classList.remove(NAV_OPEN_WIDTH);
      classList.add(NAV_CLOSED_WIDTH);
    } else {
      // show our nav
      classList.add(NAV_OPEN_WIDTH);
      classList.remove(NAV_CLOSED_WIDTH);
    }
  };

  const updateNavState = () => {
    toggleNav(sidebarOpen);
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem(NAV_VISIBILITY, JSON.stringify(newState));
  };

  useEffect(() => {
    const navState = localStorage.getItem(NAV_VISIBILITY);
    if (navState !== null) {
      const newState = JSON.parse(navState);
      setSidebarOpen(newState);
      toggleNav(!newState);
    } else {
      setSidebarOpen(true);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 h-screen overflow-hidden shadow-sm w-60 bg-cyan-100 transition-width"
    >
      <Link className="flex" href="/admin">
        <Logo className="m-3 transition duration-300 ease-in-out fill-cyan-800 hover:fill-cyan-600" />{' '}
      </Link>
      <div className="flex-1 w-full mt-5 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-900 hover:bg-cyan-200 group"
            >
              <item.icon
                className="flex-shrink-0 w-6 h-6 mr-4 text-cyan-600"
                aria-hidden="true"
              />
              {sidebarOpen && item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* open/close button */}
      <div className="absolute bottom-0 right-0 p-4">
        <button
          type="button"
          className="flex items-center justify-center focus:outline-none "
          onClick={updateNavState}
        >
          <span className="sr-only">Close sidebar</span>
          {sidebarOpen ? (
            <ArrowLeftOnRectangleIcon
              className="w-6 h-6 transition duration-300 ease-in-out text-cyan-600 hover:text-cyan-800"
              aria-hidden="true"
            />
          ) : (
            <ArrowRightOnRectangleIcon
              className="w-6 h-6 transition duration-300 ease-in-out text-cyan-600 hover:text-cyan-800"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
