import React from "react";
interface Props {
  title: string;
}
function Header({ title }: Props) {
  return (
    <div>
      <h1 className="text-3xl text-semibold ">{title}</h1>
      <div className="bg-fuchsia-300 w-full h-0.5 mt-2 mb-4"></div>
    </div>
  );
}

export default Header;
