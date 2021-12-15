import { VFC } from 'react';
import styled from 'styled-components';

type LoaderProps = {
  className?: string;
};

export const Loader: VFC<LoaderProps> = ({ className }) => {
  return (
    <StyledLoader className={`${className}`}>
      <div className="loading-text">LOADING</div>
      <div className="loading-content"></div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  width: 200px;
  height: 200px;

  .loading-text {
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    color: #666;
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
  }

  .loading-content {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    margin: -100px 0 0 -85px;
    border: 3px solid #f00;
  }

  .loading-content:after {
    content: '';
    position: absolute;
    border: 3px solid #0f0;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
  }

  .loading-content:before {
    content: '';
    position: absolute;
    border: 3px solid #00f;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
  }

  .loading-content {
    border: 3px solid transparent;
    border-top-color: #4d658d;
    border-bottom-color: #4d658d;
    border-radius: 50%;
    -webkit-animation: loader 2s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 2s linear infinite;
  }

  .loading-content:before {
    border: 3px solid transparent;
    border-top-color: #d4cc6a;
    border-bottom-color: #d4cc6a;
    border-radius: 50%;
    -webkit-animation: loader 3s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 3s linear infinite;
  }

  .loading-content:after {
    border: 3px solid transparent;
    border-top-color: #84417c;
    border-bottom-color: #84417c;
    border-radius: 50%;
    -webkit-animation: loader 1.5s linear infinite;
    animation: loader 1.5s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
  }

  @-webkit-keyframes loaders {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
