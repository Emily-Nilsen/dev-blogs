import { NextPage } from 'next';
import AdminLayout from '../../components/layout/AdminLayout';

interface Props {}

const Posts: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div>Posts</div>
    </AdminLayout>
  );
};

export default Posts;
