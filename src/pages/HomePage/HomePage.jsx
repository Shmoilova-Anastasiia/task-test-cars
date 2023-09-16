import { NavLink } from 'react-router-dom'
import css from './HomePage.module.css'

const HomePage = () => {
    return (
       < div className={css.container}>
            <div className={css.containerImage}>
           
            </div>
            <div className={css.block}>
            <p className={css.text}>Discover Wonders on Wheels with Wonder Wheel Rentals!</p>
            <NavLink className={css.buttonHome} to="/catalog">Start</NavLink>
            </div>
        </div>

    )
}
export default HomePage
