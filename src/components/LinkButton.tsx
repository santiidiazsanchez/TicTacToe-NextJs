import React from 'react';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode; 
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => (
  <a
    className='font-bold p-5 bg-customPalette-primary text-customPalette-text rounded'
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default LinkButton;