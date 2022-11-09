/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  background: url('/images/image-header.jpg');
  background-size: contain;
  position: absolute;
  width: 375px;
  height: 538px;
  left: 0px;
  top: 0px;
  img {
    position: absolute;
    width: 170px;
    height: 33px;
    left: 24px;
    top: 32px;
  }

  h1 {
    position: absolute;
    top: 144px;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: 6.25px;
    text-transform: uppercase;
    margin: 0;
    color: #ffffff;
  }

  i {
    background: url('/images/icon-arrow-down.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 30px;
    height: 107.48px;
    left: 173px;
    top: 294px;
  }

  span {
    text-align: center;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height, or 125% */

    letter-spacing: -0.142857px;

    color: #808397;
  }

  button {
    position: absolute;
    left: 94px;
    top: 210px;
    background: #fbd600;
    border-radius: 28px;
    width: 140px;
    height: 56px;
    border: 0px;
    font-family: 'Fraunces-Black', Georgia, serif;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */
    cursor: pointer;
    letter-spacing: -0.107143px;
    text-transform: uppercase;

    color: #24303e;
  }

  .navBar {
    position: absolute;
    width: 329px;
    height: 329px;
    left: 22px;
    top: 82px;

    .triangle {
      width: 0;
      height: 0;
      border-bottom: 24px solid #fffcf8;
      border-left: 24px solid transparent;
      position: absolute;
      left: 305px;
    }

    .navBarContainer {
      position: absolute;
      width: 329px;
      height: 305px;
      left: 0%;
      right: 0%;
      top: 24px;
      bottom: 0%;

      background: #fffcf8;
      z-index: 1000;
    }

    .navLinks {
      display: flex;
      flex-direction: column;
      gap: 32px;
      position: absolute;
      height: 139px;
      width: 76px;
      top: 39px;
      left: 128px;
    }
  }

  .nav {
    position: fixed;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
    z-index: 1000;
  }
  // hamburger menu
  .hamb {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
  } /* Style label tag */

  .hamb-line {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  } /* Style span tag */

  .hamb-line::before,
  .hamb-line::after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .hamb-line::before {
    top: 5px;
  }
  .hamb-line::after {
    top: -5px;
  }

  .side-menu {
    display: none;
  } /* Hide checkbox */

  /* Toggle menu icon */
  .side-menu:checked ~ .nav {
    max-height: 100%;
  }
`;

export default function Header() {
  return (
    <div css={headerStyles}>
      <img src="/images/logo.svg" alt="logo" />
      <h1> we are creatives</h1>
      {/* Hamburger icon */}
      <input class="side-menu" type="checkbox" id="side-menu" />
      <label class="hamb" for="side-menu">
        <span class="hamb-line"></span>
      </label>
      <div className="navBar nav">
        <div className="triangle" />
        <div className="navBarContainer">
          <div className="navLinks">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
          </div>
          <button>contact</button>
        </div>
      </div>
      <i />
    </div>
  );
}
