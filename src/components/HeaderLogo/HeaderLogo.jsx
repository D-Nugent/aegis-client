import './HeaderLogo.scss';
import { Link } from 'react-router-dom';
import AegisLogo from '../../assets/logo/aegis-logo.svg';
import { homeURL } from '../../utilities/routerConfig';

function HeaderLogo(props) {
    return (
        <Link className="header-logo" to={homeURL}>
            <img src={AegisLogo} alt="aegis logo" />
        </Link>
    );
}

export default HeaderLogo;