import React from 'react';

interface NpmBtnProps {
  text: string;
}

const NpmBtn: React.FC<NpmBtnProps> = ({ text }) => {
  return (
    <button>{text}</button>
  );
};

export default NpmBtn;
