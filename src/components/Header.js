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
    left: 0px;
    top: 12px;
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
`;

export default function Header() {
  return (
    <div css={headerStyles}>
      <img src="/images/logo.svg" alt="logo" />
      <h1> we are creatives</h1>
      <i />
    </div>
  );
}
