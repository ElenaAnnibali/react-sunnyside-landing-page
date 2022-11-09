/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyles = css`
  position: absolute;
  position: absolute;
  width: 375px;
  height: 350px;
  left: 0px;
  top: 4869px;

  background: #90d4c6;

  img {
    position: absolute;
    width: 170px;
    height: 33px;
    left: 96px;
    top: 64px;
  }
  span {
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 139% */

    letter-spacing: -0.128571px;

    color: #458d7e;
  }

  i {
    width: 20px;
    height: 20px;
    background: #2c7566;
  }

  .links {
    display: flex;
    gap: 57px;
    position: absolute;
    top: 137px;
    left: 39px;
  }

  .icons {
    display: flex;
    gap: 28px;
    position: absolute;
    top: 250px;
    left: 104px;
  }

  .facebook {
    background: url('images/icon-facebook.svg');
  }

  .instagram {
    background: url('images/icon-instagram.svg');
  }

  .twitter {
    background: url('images/icon-twitter.svg');
    height: 16.25px;
  }

  .pinterest {
    background: url('images/icon-pinterest.svg');
  }
`;

export default function Footer() {
  return (
    <div css={footerStyles}>
      <img src="/images/logo-edited.svg" alt="logo" />
      <div className="links">
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
      </div>
      <div className="icons">
        <i className="facebook" />
        <i className="instagram" />
        <i className="twitter" />
        <i className="pinterest" />
      </div>
    </div>
  );
}
