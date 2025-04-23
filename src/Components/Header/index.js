import { Link } from 'react-router-dom';
import Logo from '../../assets/images/LOGO.jpg';
import CountryDropDown from '../CountryDropDown';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Envios Gratis!🚨</p>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to="/">
                                <img src={Logo} alt='Logo'/>
                            </Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDropDown />

                            {/* Header Search Start Here */}
                                <div className='headerSearch m-lg-3'>
                                    <input type='text' placeholder='Buscar por productos...' />
                                    <Button><IoIosSearch /></Button>
                                </div>

                                <div className='part3 d-flex align-items-center m-lg-auto'>
                                    <Button className='circle me-3'><FiUser /></Button>
                                    <div className='m-lg-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ms-2'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default Header;