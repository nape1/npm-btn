import React from 'react';

interface NpmBtnProps {
  text: string;
  className: string;
}

const NpmBtn: React.FC<NpmBtnProps> = ({ text, className='' }) => {
  return (
    <button className={`npm-btn btn-${className}`}>{text}</button>
  );
};

export default NpmBtn;
