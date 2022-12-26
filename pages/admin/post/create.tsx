import { NextPage } from 'next';
import Editor from '../../../components/editor';

interface Props {}

const Create: NextPage<Props> = () => {
  return (
    <div className="max-w-4xl p-12 m-6 mx-auto rounded-md shadow-lg shadow-cyan-500/10 bg-cyan-50/80">
      <Editor />
    </div>
  );
};

export default Create;
