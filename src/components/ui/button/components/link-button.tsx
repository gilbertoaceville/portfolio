import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

type ButtonColor = 'primary';

type ButtonProps = {
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  color?: ButtonColor;
};

const buttonColors = {
  primary: 'border-[2px] border-solid border-primary-foreground rounded-lg',
};

export default function LinkButton({ color = 'primary', ...props }: PropsWithChildren<ButtonProps>) {
  const colorClassName = buttonColors[color];
  return (
    <Link
      className={clsx([
        'w-fit flex items-center gap-2.5 px-8 py-[18px] hover:translate-x-2 transition-transform duration-200 ease-in-out',
        colorClassName,
        props.className,
      ])}
      href={props.href}
      target={props.target}
      download={props.download}
      rel="noopener noreferrer">
      {props.children}
    </Link>
  );
};
