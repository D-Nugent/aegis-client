import './HeaderLogo.scss';
import { Link } from 'react-router-dom';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import { homeURL } from '../../utilities/routerConfig';

function HeaderLogo() {
    return (
        <Link className="header-logo" to={homeURL}>
            <img className="header-logo__icon" src={AegisLogo} alt="aegis logo" />
        </Link>
    );
}

export default HeaderLogo;