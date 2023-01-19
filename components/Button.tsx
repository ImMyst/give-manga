"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "clsx";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export default function Button(props: IProps) {
  return (
    <button
      className={cn(
        props.className,
        "bg-blue-600 text-blue-300 active:bg-red-300 hover:text-yellow-50 text-4xl rounded-md px-4 py-4"
      )}
      {...props}
    >
      Give me a manga!
    </button>
  );
}
