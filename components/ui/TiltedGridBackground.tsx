import { clsx } from 'clsx';

import TiltedGrid from 'public/static/icons/tilted-grid.svg';

const TiltedGridBackground = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(['absolute overflow-hidden [mask-image:linear-gradient(white,transparent)]', className])}>
      <svg 
         width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} >

     <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" transform="rotate(-5)" />
  
        className={clsx([
          'h-[160%] w-full',
          'absolute inset-x-0 inset-y-[-30%] skew-y-[-18deg]',
          'dark:fill-white/[.01] dark:stroke-white/[.025]',
          'fill-black/[0.02] stroke-black/5',
        ])}
      </svg>
    </div>
  );
};

export default TiltedGridBackground;