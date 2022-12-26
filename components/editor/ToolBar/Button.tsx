import React, { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
import classnames from 'classnames';

interface Props {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  children,
  active,
  disabled,
  onMouseDown,
  onClick,
}): JSX.Element => {
  const getActiveStyle = useCallback((): string => {
    if (active) return 'bg-cyan-700';
    else return 'text-white bg-cyan-500';
  }, [active]);

  const commonClasses =
    'p-1.5 rounded hover:bg-cyan-700 hover:shadow-md transition duration-300 ease-in-out';

  return (
    <button
      type="button"
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={classnames(commonClasses, getActiveStyle())}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
