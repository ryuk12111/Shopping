import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';


import { UserContext } from '../../../context/user.context';
import { CartContext } from '../../../context/cart.context';

import Footer from '../Footer/Footer';

import crownIcon from '../../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={crownIcon} alt="crown" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/inventory'>INVENTORY</NavLink>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contact'>CONTACT US</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer/>
    </Fragment>
  );
};

export default Navigation;
