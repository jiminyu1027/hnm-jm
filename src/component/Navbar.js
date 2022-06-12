import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const authenticate = useSelector((state) => state.auth.authenticate);
  console.log(authenticate);

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
  }; //로고를 누르면 상품 전체페이지로 돌아간다

  const search = (event) => {
    if (event.key == "Enter") {
      //엔터키를 눌렀을경우만 검색가능
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`); //주소창에 keyword를 붙여서 검색될수 있도록
    }
  };

  return (
    <div>
      <div>
        <div className="loginBox" onClick={goTologin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="login">
            {authenticate == false ? "로그인" : "로그아웃"}
          </div>
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
