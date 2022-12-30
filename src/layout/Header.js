import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [ShowHam, setShowHam] = useState(false);

  const navItems = [
    { name: "Home", link: "" },
    { name: "New", link: "" },
    { name: "Popular", link: "" },
    { name: "Trending", link: "" },
    { name: "Categories", link: "" },
  ];
  return (
    <Container>
      <div className="header_logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className={`ham_bg ${ShowHam ? "active" : ""}`}></div>
      <nav className={`header_nav ${ShowHam ? "active" : ""}`}>
        <button className="header_nav__close" onClick={() => setShowHam(false)}>
          <img src="/images/icon-menu-close.svg" alt="ham close icon" />
        </button>
        {React.Children.toArray(
          navItems.map((item) => (
            <a
              href={item.link}
              onClick={(e) => !item.link && e.preventDefault()}
              className="header_nav__link"
            >
              {item.name}
            </a>
          ))
        )}
      </nav>
      <button className="header_ham" onClick={() => setShowHam(true)}>
        <img src="/images/icon-menu.svg" alt="ham icon" />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 15px 0;
  .ham_bg {
    display: none;
    @media (max-width: 548px) {
      &.active {
        display: flex;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: 100;
      }
    }
  }
  .header {
    &_logo {
      width: 65px;
      @media (max-width: 548px) {
        width: 46px;
      }
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &_nav {
      display: flex;
      align-items: center;
      gap: 36px;
      &__link {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
        text-decoration: none;
        color: var(--gray-dark);
        &:hover {
          color: var(--red);
        }
      }
      &__close {
        display: none;
      }
      @media (max-width: 548px) {
        display: none;
        &.active {
          display: flex;
          flex-direction: column;
          position: fixed;
          background-color: var(--white);
          top: 0;
          bottom: 0;
          right: 0;
          width: min(100%, 256px);
          justify-content: start;
          align-items: flex-start;
          padding: 27px 20px;
          padding-left: 24px;
          gap: 26px;
          z-index: 200;
          .header_nav__close {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            background-color: transparent;
            border: none;
            outline: none;
          }
          .header_nav__link {
            font-size: 18px;
            line-height: 22px;
            color: var(--dark);
          }
        }
      }
    }
    &_ham {
      display: none;
      @media (max-width: 548px) {
        display: inline-flex;
        background: none;
        outline: none;
        border: none;
      }
    }
  }
`;
