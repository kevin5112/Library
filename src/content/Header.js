import '../style/Header.css';

function Header() {
  return (
    <header className="header">
      <p className="header-title">Library</p>

      <ul className="header-menu">
        <li>Home</li>
        <li>My Books</li>
        <li>Account</li>
      </ul>
    </header>
  );
}

export default Header;
