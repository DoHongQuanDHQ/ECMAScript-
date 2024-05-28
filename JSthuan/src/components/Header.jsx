import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <ul>
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          <Link to="/about">Giới Thiệu</Link>
        </li>
        <li>
          <Link to="/shop">Sản Phẩm</Link>
        </li>
        <li>
          <Link to="/login">Liên Hệ</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
