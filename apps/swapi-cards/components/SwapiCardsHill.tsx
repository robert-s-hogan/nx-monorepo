export interface SwapiCardsHillProps {
  color: string; // This will use the CSS variable names you defined
  className?: string; // For additional Tailwind CSS classes
}

const SwapiCardsHill: React.FC<{
  color: string;
  additionalClasses?: string;
}> = ({ color, additionalClasses }) => {
  return (
    <div
      className={`absolute ${additionalClasses}`}
      style={{
        backgroundColor: `var(${color})`,
        borderRadius: '50% 50% 0 0',
        transform: 'rotate(6deg)',
      }}
    ></div>
  );
};

export default SwapiCardsHill;
