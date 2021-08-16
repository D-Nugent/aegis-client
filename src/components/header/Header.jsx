import './Header.scss';

function Header() {
    return (
        <div>
            <div className="header__spacer"></div>
            <header className="header">
                <div className="header__column">
                    {/* icon */}
                    {/* navbar hidden at mobile */}
                </div>
                <div className="header__column">
                    {/* login */}
                    {/* hamburger menu at mobile */}
                </div>            
            </header>
        </div>
        
    );
}

export default Header;