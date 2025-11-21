import React from 'react';

export const Button = ({ children, variant = 'default', size = 'default', className = '', onClick }) => {
  const base = 'btn';
  const variants = {
    default: 'btn-default',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  const sizes = {
    default: 'btn-md',
    icon: 'btn-icon'
  };
  const cls = [base, variants[variant] || '', sizes[size] || '', className].join(' ').trim();
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};