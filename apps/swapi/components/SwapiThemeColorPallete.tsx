import { Flex, Grid } from '@with-nx/react-ui';
import { DefaultColorScheme } from '../utils/themeMap';

interface SwapiThemeColorPalleteProps {
  themeColors: any;
}

const SwapiThemeColorPallete: React.FC<SwapiThemeColorPalleteProps> = ({
  themeColors,
}) => {
  return (
    <div className="p-5 text-sm bg-gradient-to-r from-tertiary via-light-blue to-secondary">
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="text-white">HEX:</div>
        {Object.values(themeColors.hex).map((color, index) => (
          <div
            style={{
              backgroundColor: color as string,
              textAlign: 'center',
              color: 'white',
            }}
            className={index === 3 ? '!text-black' : ''}
            key={index}
          >
            {color as string}
          </div>
        ))}
      </Grid>
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="text-white">TEXT:</div>
        {Object.values(themeColors.text).map((color, index) => (
          <div
            style={{
              backgroundColor: 'lightgrey',
              textAlign: 'center',
            }}
            className={`${color} ${index === 3 ? '!text-black' : ''}`}
            key={index}
          >
            {color as string}
          </div>
        ))}
      </Grid>
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="text-white">BACKGROUND:</div>
        {Object.values(themeColors.background).map((color, index) => (
          <div
            style={{
              textAlign: 'center',
            }}
            className={`${color} ${index === 3 ? '!text-black' : 'text-white'}`}
            key={index}
          >
            {color as string}
          </div>
        ))}
      </Grid>
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="text-white">BORDER:</div>
        {Object.values(themeColors.border).map((color, index) => (
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'white',
            }}
            className={`border-4 ${color}`}
            key={index}
          >
            {color as string}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default SwapiThemeColorPallete;
