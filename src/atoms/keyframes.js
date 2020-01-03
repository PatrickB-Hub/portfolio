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
