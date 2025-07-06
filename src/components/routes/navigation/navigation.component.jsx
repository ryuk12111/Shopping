import { Fragment, useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../../context/user.context';
import { CartContext } from '../../../context/cart.context';

import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';

import Footer from '../Footer/Footer';
import crownIcon from '../../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <Fragment>
      <nav className="bg-pink sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={crownIcon} alt="logo" className="w-12 h-12" />
          </Link>

          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Nav links */}
          <ul
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row items-center gap-8 absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 lg:px-0 py-6 lg:py-0 shadow-md lg:shadow-none transition-all duration-300`}
          >
            <li>
              <Link to="/" onClick={handleNavClick} className="text-gray-700 hover:text-indigo-600 font-semibold">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/inventory" onClick={handleNavClick} className="text-gray-700 hover:text-indigo-600 font-semibold">
                INVENTORY
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={handleNavClick} className="text-gray-700 hover:text-indigo-600 font-semibold">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick} className="text-gray-700 hover:text-indigo-600 font-semibold">
                CONTACT US
              </Link>
            </li>
            <li>
              {currentUser ? (
                <span onClick={() => { signOutUser(); handleNavClick(); }} className="cursor-pointer text-gray-700 hover:text-indigo-600 font-semibold">
                  SIGN OUT
                </span>
              ) : (
                <Link to="/auth" onClick={handleNavClick} className="text-gray-700 hover:text-indigo-600 font-semibold">
                  SIGN IN
                </Link>
              )}
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>

        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
