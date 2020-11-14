import { css } from "styled-components";

const mixins = {
  flexRow: css`
    display: flex;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
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
