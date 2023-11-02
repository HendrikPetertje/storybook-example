import style from './Button.module.scss';

interface ButtonProps {
  isSubmit?: boolean;
  children: React.ReactNode | React.ReactNode[];
  kind: 'primary' | 'secondary';
  onClick?: (arg: string) => void;
}

export default function Button(props: ButtonProps) {
  const { isSubmit, children, kind, onClick } = props;

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={kind === 'secondary' ? style.secondary : style.primary}
      onClick={() => onClick('yolo')}
    >
      {children}
    </button>
  )
}
