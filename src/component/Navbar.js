import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const goTologin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key == "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="loginBox" onClick={goTologin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="login">로그인</div>
        </div>
      </div>
      <div className="imgBox">
        <img
          onClick={goToHome}
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
        />
      </div>
      <div>
        <ul className="menuList">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="searchBox">
          <div className="searchBorder">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="제품검색"
              onKeyPress={(event) => search(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
