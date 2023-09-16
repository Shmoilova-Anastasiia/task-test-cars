import { GiCarWheel } from 'react-icons/gi';
import { Navigation } from './Navigation';

import css from './Header.module.css'

export const Header = () => {

  return (
    <header className={css.header}>
        <div className={css.containerLogo}>
            <GiCarWheel className={css.headerIcon}/>
            <h2 className={css.logo}>Wonder <span className={css.logoPart}>wheel</span></h2>
        </div>
      <Navigation />
    </header>
  );
};