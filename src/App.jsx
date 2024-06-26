import styled from 'styled-components'

function App() {

    return (
        <AppDetails>
            <div className="ball"></div>
            <div
                className="ball"
                style={
                    {
                        "--delay": "-12s",
                        "--size": "0.35",
                        "--speed": "25s",
                    }
                }
            ></div>

            <div
                className="ball"
                style={
                    {
                        "--delay": "-10s",
                        "--size": "0.3",
                        "--speed": "15s",
                    }
                }
            ></div>
        </AppDetails>
    )
}

export default App

const AppDetails = styled.div`

.ball {
    --delay: 0s;
    --size: 0.4;
    --speed: 20s;
    aspect-ratio: 1;
    width: calc(100% * var(--size));
    background: linear-gradient(259.53deg, #0a3fff 6.53%, #f55f0a 95.34%);
    filter: blur(10vw);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    animation: loop var(--speed) infinite linear;
    animation-delay: var(--delay);
    transform-origin: 50% 50%;
    opacity: 0.6;
    z-index: -2;
}

@keyframes loop {
    0% {
      transform: translate3D(0%, 51%, 0) rotate(0deg);
    }

    5% {
      transform: translate3D(8%, 31%, 0) rotate(18deg);
    }

    10% {
      transform: translate3D(22%, 13%, 0) rotate(36deg);
    }

    15% {
      transform: translate3D(40%, 2%, 0) rotate(54deg);
    }

    20% {
      transform: translate3D(46%, 21%, 0) rotate(72deg);
    }

    25% {
      transform: translate3D(50%, 47%, 0) rotate(90deg);
    }
    
    30% {
      transform: translate3D(53%, 80%, 0) rotate(108deg);
    }

    35% {
      transform: translate3D(59%, 98%, 0) rotate(125deg);
    }
    
    40% {
      transform: translate3D(84%, 89%, 0) rotate(144deg);
    }

    45% {
      transform: translate3D(92%, 68%, 0) rotate(162deg);
    }

    50% {
      transform: translate3D(99%, 47%, 0) rotate(180deg);
    }

    55% {
      transform: translate3D(97%, 21%, 0) rotate(198deg);
    }

    60% {
      transform: translate3D(80%, 7%, 0) rotate(216deg);
    }

    65% {
      transform: translate3D(68%, 25%, 0) rotate(234deg);
    }

    70% {
      transform: translate3D(59%, 41%, 0) rotate(251deg);
    }

    75% {
      transform: translate3D(50%, 63%, 0) rotate(270deg);
    }

    80% {
      transform: translate3D(38%, 78%, 0) rotate(288deg);
    }

    85% {
      transform: translate3D(21%, 92%, 0) rotate(306deg);
    }
    
    90% {
      transform: translate3D(3%, 79%, 0) rotate(324deg);
    }

    100% {
      transform: translate3D(0%, 51%, 0) rotate(360deg);
    }
}
`