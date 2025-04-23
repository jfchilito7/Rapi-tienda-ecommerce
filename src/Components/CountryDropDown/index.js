import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropDown = () => {
    return (
        <Button className='countryDrop'>
            <div className='info d-flex flex-column'>
                <span className='label'>Tu Ubicación</span>
                <span className='name'>Colombia</span>
            </div>
            <span className='m-lg-auto'><FaAngleDown /></span>
        </Button>
    )
}

export default CountryDropDown;