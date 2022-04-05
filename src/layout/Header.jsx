function Header() {
    return (
        <div className="navbar-fixed">
            <nav className="blue-grey darken-4">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">React Movies</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Movies</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export { Header };