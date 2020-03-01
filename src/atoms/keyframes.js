import { keyframes } from "styled-components";

// meteor grows in size and eventually fades out
export const meteorAnimation = keyframes`
  from {
    transform: scale(0);
  }

  1% {
    opacity: ${Math.random() + 0.09};
  }

  9% {
    opacity: 0;
    height: 0;
  }

  11% {
    transform: scale(1);
  }

  to {
    opacity: 0;
  }
`;

export const pulseEffect = keyframes`
	50% {
		opacity: 1;
	}
	70% {
		opacity: 0;
	}
	90% {
		opacity: 1;
	}
`;

// nav slides from top into view
export const navReveal = keyframes`
	0% {
		top: -10rem;
		opacity: 0;
	}

	50% {
		opacity: 0;
	}

	100% {
		top: 0;
		opacity: 1;
	}
`;

// bounces up and down
export const bounce = keyframes`
  	50% {
		transform: translateY(-50%);
  	}
  	100% {
		transform: translateY(0);
  	}
`;
