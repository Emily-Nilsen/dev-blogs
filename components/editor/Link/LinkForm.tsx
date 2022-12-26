import { FC, useState } from 'react';
import { validateUrl } from '../EditorUtils';

interface Props {
  visible: boolean;
  onSubmit(link: linkOption): void;
}

export type linkOption = {
  url: string;
  openInNewTab: boolean;
};

const LinkForm: FC<Props> = ({ visible, onSubmit }): JSX.Element | null => {
  const [link, setLink] = useState<linkOption>({
    url: '',
    openInNewTab: false,
  });

  const handleSubmit = () => {
    if (!link.url.trim()) return;

    onSubmit({ ...link, url: validateUrl(link.url) });
  };

  if (!visible) return null;
  return (
    <div className="p-2">
      <input
        autoFocus
        type="text"
        className="w-full p-2 overflow-hidden transition bg-white border rounded-md border-cyan-100 focus:border-cyan-100 focus:outline-offset-2 focus:outline-cyan-100/30 text-cyan-800 focus:ring-0 focus:outline-4 placeholder:text-cyan-500"
        placeholder="https://example.com"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
      />
      <div className="flex items-center justify-between p-2 my-3">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="open-in-new-tab"
            className="bg-white rounded-sm text-cyan-500 border-cyan-300 focus:ring-cyan-200"
            checked={link.openInNewTab}
            onChange={({ target }) =>
              setLink({ ...link, openInNewTab: target.checked })
            }
          />
          <label className="text-cyan-800" htmlFor="open-in-new-tab">
            Open link in a new tab
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 transition rounded-md bg-cyan-50 text-cyan-600 hover:bg-cyan-500 hover:text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default LinkForm;
