'use client'
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const getDirectionStyles = (): React.CSSProperties => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return { transform: 'translateY(20px)', opacity: 0 };
        case 'down':
          return { transform: 'translateY(-20px)', opacity: 0 };
        case 'left':
          return { transform: 'translateX(20px)', opacity: 0 };
        case 'right':
          return { transform: 'translateX(-20px)', opacity: 0 };
        case 'none':
          return { opacity: 0 };
        default:
          return { transform: 'translateY(20px)', opacity: 0 };
      }
    }
    return { transform: 'translate(0)', opacity: 1 };
  };

  const styles: React.CSSProperties = {
    ...getDirectionStyles(),
    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={domRef} style={styles} className={className} {...props}>
      {children}
    </div>
  );
};

interface StaggerChildrenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerAmount?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  staggerAmount = 100,
  className = '',
  direction = 'up',
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className} {...props}>
      {childrenArray.map((child, index) => (
        <FadeIn key={index} delay={index * staggerAmount} direction={direction}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
};
