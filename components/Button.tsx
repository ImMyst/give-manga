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
        "bg-blue-600 text-blue-300 active:scale-105 duration-75 transition-all hover:text-yellow-50 text-4xl rounded-lg px-4 py-4"
      )}
      {...props}
    >
      Give me a manga!
    </button>
  );
}
