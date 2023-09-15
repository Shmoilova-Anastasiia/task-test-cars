import { GiCarWheel } from 'react-icons/gi';
import { Navigation } from './Navigation';

export const Header = () => {

  return (
    <header>
        <div>
            <GiCarWheel/>
            <h2>Rent car</h2>
        </div>
      <Navigation />
    </header>
  );
};