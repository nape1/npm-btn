import React from 'react';

interface NpmBtnProps {
  text: string;
  className: string;
}

const NpmBtn: React.FC<NpmBtnProps> = ({ text, className='' }) => {
  return (
    <button style={{ border: '1px solid blue'}} className={`npm-btn btn-${className}`} onClick={() => console.log('npm-btn clicked')}>{text}</button>
  );
};

export default NpmBtn;
