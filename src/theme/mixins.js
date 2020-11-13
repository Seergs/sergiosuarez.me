import { css } from "styled-components";

const mixins = {
  flexRow: css`
    display: flex;
  `,
  justifyBetween: css`
    justify-content: space-between;
  `,
  justifyCenter: css`
    justify-content: center;
  `,
  alignCenter: css`
    align-items: center;
  `,
};

export default mixins;
