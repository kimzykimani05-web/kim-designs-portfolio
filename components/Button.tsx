"use client";

import React, { useRef } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  animateOnHover?: boolean;
  magnetic?: boolean;
}

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.03 },
  press: { scale: 0.97 },
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ variant = 'primary', size = 'md', className = '', children, asChild = false, animateOnHover = true, magnetic = false, ...rest }, ref) => {
  const rippleRef = useRef<HTMLButtonElement>(null);

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none relative overflow-hidden';
  
  const variantClasses = {
    primary: 'text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/40 focus-visible:ring-brand-blue/50',
    secondary: 'text-light-primary bg-dark-card border border-white/10 hover:bg-dark-secondary focus-visible:ring-white/20',
    outline: 'text-light-primary border-2 border-white/20 hover:border-brand-blue hover:text-brand-cyan hover:bg-brand-blue/10 focus-visible:ring-brand-blue/50',
  }[variant];
  
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }[size];
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();
  
  const motionProps = animateOnHover ? {
    whileHover: buttonVariants.hover,
    whileTap: buttonVariants.press,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  } : {};

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!rippleRef.current) return;
    const rect = rippleRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
    
    const button = rippleRef.current;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  if (asChild || magnetic) {
    return (
      <motion.button
        ref={ref}
        className={classes}
        {...motionProps}
        onClick={magnetic ? undefined : rest.onClick}
        {...(rest as any)}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={classes}
      {...motionProps}
      onClick={handleRipple}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
