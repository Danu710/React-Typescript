import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  React.ComponentProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Compopnent = as || "div";
  return (
    <Compopnent className={`class-with ${size}-${color}`}>
      {children}
    </Compopnent>
  );
};
