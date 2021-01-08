import React from "react";

interface IProps {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  size?: string;
  marginBottom?: number;
}

const Heading = ({
  as = "h1",
  children,
  size = "1rem",
  marginBottom = 0
}: IProps) => {
  switch (as) {
    case "h1":
      return <h1 style={{ fontSize: size, marginBottom }}>{children}</h1>;
    case "h2":
      return <h2 style={{ fontSize: size, marginBottom }}>{children}</h2>;
    case "h3":
      return <h3 style={{ fontSize: size, marginBottom }}>{children}</h3>;
    default:
      return <h1>{children}</h1>;
  }
};

export default Heading;
