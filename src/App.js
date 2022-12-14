/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Footer from './components/Footer';
import Header from './components/Header';

const sunnysideStyles = css`
  h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    letter-spacing: -0.228571px;

    color: #24303e;
  }

  p {
    line-height: 30px;
    /* or 167% */

    text-align: center;
    letter-spacing: -0.128571px;

    color: #808397;
  }

  .learnMore {
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    color: #24303e;
  }

  a div {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 60%;
    bottom: 0%;

    background: #fad400;
    mix-blend-mode: normal;
    opacity: 0.25;
    border-radius: 28px;
  }

  .transform {
    background: url('/images/image-transform.jpg');
    background-size: contain;
    position: absolute;
    width: 375px;
    height: 312px;
    left: 0px;
    top: 538px;
  }

  .secondContainer {
    width: 100%;
    height: 437px;

    h2 {
      position: absolute;
      width: 327px;
      height: 78px;
      left: 24px;
      top: 914px;
    }

    p {
      position: absolute;
      width: 327px;
      height: 150px;
      left: 24px;
      top: 1016px;
    }

    .first {
      position: absolute;
      width: 137px;
      height: 25px;
      left: 118.5px;
      top: 1198px;
    }
  }

  .thirdContainer {
    .standOut {
      background: url('/images/image-stand-out.jpg');
      background-size: contain;
      position: absolute;
      width: 375px;
      height: 312px;
      left: 0px;
      top: 1287px;
    }
  }

  .fourthContainer {
    position: absolute;
    width: 100%;
    left: 0;
    top: 1599px;

    .fourthContTitle {
      position: absolute;
      width: 327px;
      height: 78px;
      left: 24px;
      top: 64px;
      margin: 0;
    }

    p {
      position: absolute;
      width: 327px;
      height: 150px;
      left: 24px;
      top: 166px;
      margin: 0;
    }

    .second {
      position: absolute;
      width: 137px;
      height: 25px;
      left: 118.5px;
      top: 348px;
    }

    .second div {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 60%;
      bottom: 0%;
      width: 137px;
      height: 10px;

      background: #fe7766;
      mix-blend-mode: normal;
      opacity: 0.25;
      border-radius: 28px;
    }
  }

  .fifthContainer {
    background: url('/images/image-graphic-design.jpg');
    background-size: contain;
    position: absolute;
    width: 375px;
    height: 600px;
    left: 0px;
    top: 2036px;

    h2 {
      position: relative;
      height: 35px;

      top: 398px;

      font-size: 28px;
      line-height: 35px;
      /* identical to box height */

      text-align: center;
      letter-spacing: -0.2px;
      margin: 0;
      color: #24554a;
    }

    p {
      position: absolute;
      top: 460px;
      text-align: center;
      letter-spacing: -0.114286px;
      color: #24554a;
      font-size: 16px;
      line-height: 27px;
      margin: 0;
    }
  }

  .sixthContainer {
    background: url('/images/image-photography.jpg');
    background-size: contain;
    position: absolute;
    width: 375px;
    height: 600px;
    left: 0px;
    top: 2636px;

    h2 {
      position: relative;
      top: 398px;
      font-size: 28px;
      line-height: 35px;
      /* identical to box height */

      text-align: center;
      letter-spacing: -0.2px;

      color: #052c3b;
    }

    p {
      position: absolute;
      top: 460px;
      left: 24px;
      width: 327px;
      text-align: center;
      letter-spacing: -0.114286px;
      color: #19536c;
      font-size: 16px;
      line-height: 27px;
      margin: 0;
    }
  }

  .seventhContainer {
    position: absolute;
    top: 3236px;
    height: 1858px;
    left: 0px;

    .seventhContTitle {
      position: absolute;
      width: 289px;

      left: 48px;
      top: 64px;
      text-align: center;

      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      letter-spacing: 4px;
      text-transform: uppercase;

      color: #a7aaad;
    }

    .emily {
      position: absolute;
      width: 327px;
      /* height: 288px; */
      left: 0;
      top: 84px;

      div {
        background: url('images/image-emily.jpg');
        background-size: contain;
        position: absolute;
        top: 64px;
        left: 151px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
      }

      p {
        position: absolute;
        top: 168px;
        left: 24px;
        margin: 0;
        width: 327px;
        font-size: 18px;
        line-height: 32px;
        /* or 178% */

        text-align: center;
        letter-spacing: -0.128571px;

        color: #5b636d;
      }

      .testimonialName {
        position: absolute;
        top: 296px;
        left: 149px;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.128571px;

        color: #24303e;
      }

      .testimonialJob {
        position: absolute;
        width: 203px;
        top: 327px;
        left: 86px;

        font-size: 14px;
        line-height: 25px;
        /* identical to box height, or 179% */

        text-align: center;
        letter-spacing: -0.1px;

        color: #a7aaad;
      }
    }

    .thomas {
      position: absolute;
      width: 327px;
      height: 320px;
      left: 0px;
      top: 436px;

      div {
        background: url('images/image-thomas.jpg');
        background-size: contain;
        position: absolute;
        top: 64px;
        left: 151px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
      }

      p {
        position: absolute;
        top: 168px;
        left: 24px;
        margin: 0;
        width: 327px;
        font-size: 18px;
        line-height: 32px;
        /* or 178% */

        text-align: center;
        letter-spacing: -0.128571px;

        color: #5b636d;
      }

      .testimonialName {
        position: absolute;
        top: 296px;
        left: 149px;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.128571px;

        color: #24303e;
      }

      .testimonialJob {
        position: absolute;
        width: 203px;
        top: 327px;
        left: 86px;

        font-size: 14px;
        line-height: 25px;
        /* identical to box height, or 179% */

        text-align: center;
        letter-spacing: -0.1px;

        color: #a7aaad;
      }
    }

    .jennie {
      position: absolute;
      width: 327px;
      height: 288px;
      left: 0px;
      top: 820px;

      div {
        background: url('images/image-jennie.jpg');
        background-size: contain;
        position: absolute;
        top: 64px;
        left: 151px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
      }

      p {
        position: absolute;
        top: 168px;
        left: 24px;
        margin: 0;
        width: 327px;
        font-size: 18px;
        line-height: 32px;
        /* or 178% */

        text-align: center;
        letter-spacing: -0.128571px;

        color: #5b636d;
      }

      .testimonialName {
        position: absolute;
        top: 296px;
        left: 149px;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.128571px;

        color: #24303e;
      }

      .testimonialJob {
        position: absolute;
        width: 203px;
        top: 327px;
        left: 86px;

        font-size: 14px;
        line-height: 25px;
        /* identical to box height, or 179% */

        text-align: center;
        letter-spacing: -0.1px;

        color: #a7aaad;
      }
    }
  }

  .eightContainer {
    position: absolute;
    width: 375px;
    height: 375px;
    left: 0px;
    top: 4494px;

    .milkBottles {
      background: url('images/image-gallery-milkbottles.jpg');
      background-size: cover;
      position: absolute;
      width: 188px;
      height: 188px;
      left: 0px;
      top: 0px;
    }

    .orange {
      background: url('images/image-gallery-orange.jpg');
      background-size: cover;
      position: absolute;
      width: 188px;
      height: 188px;
      left: 187px;
      top: 0;
    }

    .cone {
      background: url('images/image-gallery-cone.jpg');
      background-size: cover;
      position: absolute;
      width: 188px;
      height: 188px;
      left: 0px;
      top: 187px;
    }

    .sugar {
      background: url('images/image-gallery-sugar-cubes.jpg');
      background-size: cover;
      position: absolute;
      width: 188px;
      height: 188px;
      left: 187px;
      top: 187px;
    }
  }

  @media (min-width: 376px) {
    .transform {
      background: url('/images/desktop/image-transform.jpg');

      width: 720px;
      height: 600px;
      left: 720px;
      top: 800px;
    }

    .secondContainer {
      width: 100%;
      height: 600px;

      h2 {
        width: 445px;
        height: 98px;
        left: 165px;
        top: 958px;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: -0.285714px;
        text-align: left;
      }

      p {
        width: 445px;
        height: 90px;
        left: 165px;
        top: 1088px;

        text-align: left;
      }

      .first {
        width: 137px;
        height: 25px;
        left: 165.5px;
        top: 1218px;
      }
    }

    .thirdContainer {
      .standOut {
        background: url('/images/desktop/image-stand-out.jpg');
        width: 720px;
        height: 600px;
        left: 0px;
        top: 1400px;
      }
    }

    .fourthContainer {
      width: 720px;
      height: 600px;
      left: 720px;

      top: 1400px;

      .fourthContTitle {
        width: 445px;
        height: 98px;
        left: 110px;
        top: 157px;
        font-size: 40px;
        line-height: 49px;

        text-align: left;
      }

      p {
        width: 445px;
        height: 90px;
        left: 110px;
        top: 288px;
        text-align: left;
      }

      .second {
        top: 418px;
      }
    }

    .fifthContainer {
      background: url('/images/desktop/image-graphic-design.jpg');

      width: 720px;
      height: 600px;
      left: 0px;
      top: 2000px;

      p {
        top: 460px;
        left: 191px;
        width: 339px;
        height: 81px;
      }
    }

    .sixthContainer {
      background: url('/images/desktop/image-photography.jpg');

      width: 720px;
      height: 600px;
      left: 720px;
      top: 2000px;

      p {
        top: 460px;
        left: 191px;
        width: 339px;
        height: 81px;
      }
    }

    .seventhContainer {
      position: absolute;
      top: 2670px;
      height: 777px;
      left: 165px;

      .seventhContTitle {
        position: absolute;
        width: 448px;

        left: 380px;
        top: 0px;
        text-align: center;

        font-size: 20px;
        line-height: 25px;
        /* identical to box height */

        text-align: center;
        letter-spacing: 5px;
      }

      .emily {
        position: absolute;
        width: 327px;
        /* height: 288px; */
        left: 0;
        top: 106px;

        div {
          top: 0px;
          left: 139px;
        }

        p {
          top: 130px;
          left: 0px;
        }

        .testimonialName {
          top: 296px;
          left: 128px;
        }

        .testimonialJob {
          left: 65px;
        }
      }

      .thomas {
        left: 380px;
        top: 106px;

        div {
          top: 0px;
        }

        p {
          top: 130px;
        }

        .testimonialName {
          left: 140px;
        }
      }

      .jennie {
        top: 106px;
        left: 760px;

        div {
          top: 0px;
        }

        p {
          top: 130px;
          width: 350px;
        }
      }
    }

    .eightContainer {
      position: absolute;
      width: 100%;
      height: 447px;
      left: 0px;
      top: 3287px;

      .milkBottles {
        background: url('images/desktop/image-gallery-milkbottles.jpg');
        background-size: cover;
        width: 360px;
        height: 447px;
      }

      .orange {
        background: url('images/desktop/image-gallery-orange.jpg');
        background-size: cover;
        width: 360px;
        height: 447px;
        left: 360px;
      }

      .cone {
        background: url('images/desktop/image-gallery-cone.jpg');
        background-size: cover;
        width: 360px;
        height: 447px;
        left: 720px;

        top: 0px;
      }

      .sugar {
        background: url('images/image-gallery-sugar-cubes.jpg');
        background-size: cover;
        width: 360px;
        height: 447px;
        left: 1080px;
        top: 0;
      }
    }
  }
`;

function App() {
  return (
    <div className="sunnySide" css={sunnysideStyles}>
      <Header />
      <main>
        <div className="firstContainer">
          <div className="transform" />
        </div>
        <div className="secondContainer">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="learnMore first" href="/">
            learn more
            <div />
          </a>
        </div>
        <div className="thirdContainer">
          <div className="standOut" />
        </div>
        <div className="fourthContainer">
          <h2 className="fourthContTitle">Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we???ll build and
            extend your brand in digital places.
          </p>
          <a className="learnMore second" href="/">
            learn more
            <div />
          </a>
        </div>
        <div className="fifthContainer">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients???
            attention.
          </p>
        </div>
        <div className="sixthContainer">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
        <div className="seventhContainer">
          <h2 className="seventhContTitle">client testimonials</h2>
          <div className="emily">
            <div />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h2 className="testimonialName">Emily R.</h2>
            <span className="testimonialJob">Marketing Director</span>
          </div>
          <div className="thomas">
            <div />
            <p>
              Sunnyside???s enthusiasm coupled with their keen interest in our
              brand???s success made it a satisfying and enjoyable experience.
            </p>
            <h2 className="testimonialName">Thomas S.</h2>
            <span className="testimonialJob">Chief Operating Officer</span>
          </div>
          <div className="jennie">
            <div />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h2 className="testimonialName">Jennie F.</h2>
            <span className="testimonialJob">Business Owner</span>
          </div>
        </div>
        <div className="eightContainer">
          <div className="milkBottles" />
          <div className="orange" />
          <div className="cone" />
          <div className="sugar" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
