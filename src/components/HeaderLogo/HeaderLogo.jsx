import './HeaderLogo.scss';
import { Link } from 'react-router-dom';
import AegisLogo from '../../assets/logo/aegis-logo.svg';

function HeaderLogo(props) {
    return (
        <Link>
            <img src={AegisLogo} alt="aegis logo" />
        </Link>
    );
}

export default HeaderLogo;