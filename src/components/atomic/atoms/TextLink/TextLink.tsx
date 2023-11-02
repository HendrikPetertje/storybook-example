import { useMemo } from 'react';
import style from './TextLink.module.scss';

interface TextLinkProps {
  /**
   * The content of the link
  */
  children: React.ReactNode | React.ReactNode[];
  /**
   * Blue or red?
  */
  kind?: 'primary' | 'secondary';
  /**
  * Where does the link go?
  */
  to: string;
}

export default function TextLink(props: TextLinkProps) {
  const { children, kind, to } = props;

  const kindClass = useMemo(() => {
    if (kind === 'secondary') style.secondary;
    return style.primary;
  }, [kind]);

  return (
    <a href={to} className={`${kindClass} ${style.link}`}>{children}</a>
  )
}
