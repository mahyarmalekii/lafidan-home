import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
  transitionDuration?: number;
  style?: React.CSSProperties;
}

export const AnimatedHeading = ({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
  transitionDuration = 500,
  style = {},
}: AnimatedHeadingProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        const words = line.split(' ');
        let currentGlobalCharIndex = 0;
        
        return (
          <div key={lineIndex} className="block">
            {words.map((word, wordIndex) => {
              const isLastWord = wordIndex === words.length - 1;
              const wordChars = isLastWord ? word.split('') : [...word.split(''), ' '];

              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {wordChars.map((char) => {
                    const delay = (lineIndex * lineLength * charDelay) + (currentGlobalCharIndex * charDelay);
                    currentGlobalCharIndex++;

                    return (
                      <span
                        key={currentGlobalCharIndex}
                        className="inline-block transition-all"
                        style={{
                          opacity: startAnimation ? 1 : 0,
                          transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                          transitionDuration: `${transitionDuration}ms`,
                          transitionDelay: `${delay}ms`,
                          whiteSpace: 'pre',
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
};
