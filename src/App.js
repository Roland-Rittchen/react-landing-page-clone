/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as LogoSVG } from './images/headspace-logo.svg';

const navBarOffer = css`
  position: relative;
  text-align: center;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: #32aaff;
  height: 54px;
`;

const navBarOfferText = css`
  color: white;
  font-size: 16px;
  line-height: 1.375rem;
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const navBarStyle = css`
  position: sticky;
  max-width: 90rem;
  box-sizing: border-box;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
`;

const navBarSubStyle = css`
  position: relative;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const navBarLogoStyle = css`
  height: 2rem;
  display: flex;
`;

const navBarItemStyle = css`
  position: relative;
  padding: 0 0.75rem;
  font-weight: 500;
`;

const navBarButtonStyle = css`
  margin-left: 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  padding: calc((2.75rem - 1.1em) / 2) 1.5rem;
  position: relative;
  background: #0c6ff9;
  border-color: transparent;
  border-radius: 2rem;

  :hover {
    background: #084fff;
    transition: all 0.2s ease-in-out;
  }
`;

function App() {
  return (
    <div className="App">
      <header>
        <div css={navBarOffer}>
          <div css={navBarOfferText}>Get 14 days free now</div>
        </div>
        <nav css={navBarStyle}>
          <LogoSVG css={navBarLogoStyle} />
          <div css={navBarSubStyle}>
            <div css={navBarItemStyle}>Articles</div>
            <div css={navBarItemStyle}>Meditation</div>
            <div css={navBarItemStyle}>Sleep</div>
            <div css={navBarItemStyle}>Stress</div>
            <div css={navBarItemStyle}>Mindfulness</div>
          </div>
          <div css={navBarSubStyle}>
            <div css={navBarItemStyle}>Work</div>
            <div css={navBarItemStyle}>About</div>
            <div css={navBarItemStyle}>Help</div>
            <div css={navBarItemStyle}>Login</div>
            <button css={navBarButtonStyle}>Try for free</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
