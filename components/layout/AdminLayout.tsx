import { FC, ReactNode } from 'react';
import Link from 'next/link';
import AdminNav from '../../components/common/AdminNav';
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  DocumentPlusIcon,
  HomeIcon,
  UsersIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface Props {
  children: ReactNode;
}

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

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="flex">
      <AdminNav navItems={navItems} />
      <div className="flex-1 p-4">{children}</div>
      {/* create button */}
      <Link
        className="fixed z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-white transition border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 right-10 bottom-10"
        href="/admin/post/create"
      >
        <DocumentPlusIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
        Create Post
      </Link>
    </div>
  );
};

export default AdminLayout;
