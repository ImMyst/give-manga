import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "clsx";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isAnime?: boolean;
}
export default function Button(props: IProps) {
  const { isAnime, className, children, ...rest } = props;

  return (
    <button
      className={cn(
        className,
        isAnime ? "bg-orange-600 text-orange-300" : "bg-blue-600 text-blue-300",
        "active:scale-105 duration-75 transition-all hover:text-yellow-50 text-4xl rounded-lg px-4 py-4"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
