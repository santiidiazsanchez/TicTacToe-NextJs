import React from 'react'

type LinkButtonProps = {
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href }) => (
    <button className='mt-10 font-bold p-5 mx-4 bg-customPalette-primary text-customPalette-text rounded' href={href}>
      View Code
    </button>
  
);

export default LinkButton;
