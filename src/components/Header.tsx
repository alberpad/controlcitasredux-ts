import React from 'react';
interface IHeaderProps {
  titulo: string;
}

function Header(props: IHeaderProps) {
  const { titulo } = props;
  return (
    <header>
      <h1 className="text-center">{titulo}</h1>
    </header>
  );
}

export default Header;
