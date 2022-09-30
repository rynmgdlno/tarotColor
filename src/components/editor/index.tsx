import React from 'react';

import styles from './editor.module.scss';

type EditorProps = {
  children: React.ReactNode;
  className: string | undefined;
  id: number;
};

export const Editor = ({
  children,
  className,
}: EditorProps): React.ReactElement => {
  return (
    <div className={className && styles[className]}>
      {children}
    </div>
  );
};
