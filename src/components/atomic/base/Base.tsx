import './Base.module.scss';

interface BaseProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Base({ children }: BaseProps) {
  return (
    <>
      {children}
    </>
  );
}
