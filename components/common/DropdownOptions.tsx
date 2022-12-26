import { FC, ReactNode, useState } from 'react';

interface Props {
  options: { label: string; onClick(): void }[];
  head: ReactNode;
}

const DropdownOptions: FC<Props> = ({ head, options }): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <button
      onBlur={() => setShowOptions(false)}
      onMouseDown={() => setShowOptions(!showOptions)}
      className="relative px-4 my-3 text-white transition rounded-md hover:bg-cyan-700 bg-cyan-500"
    >
      {head}
      {showOptions && (
        <div className="absolute z-10 mt-4 font-medium text-left transition bg-white border-2 rounded-md text-cyan-700 min-w-max top-full right-2 border-cyan-100">
          <ul className="p-3 space-y-3">
            {options.map(({ label, onClick }, index) => {
              return (
                <li
                  className="px-6 py-2 transition rounded-md hover:bg-cyan-50 hover:text-cyan-900"
                  key={label + index}
                  onMouseDown={onClick}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;
