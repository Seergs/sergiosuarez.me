import React, { useContext } from "react";
import styled from "styled-components/macro";
import useTranslation from "../hooks/useTranslation";
import LightIcon from "../svg/light.svg";
import DarkIcon from "../svg/dark.svg";
import { motion, AnimatePresence } from "framer-motion";
import VisuallyHidden from "./visually-hidden";
import { ThemeContext } from "../context/theme-context";
import mixins from "../theme/mixins";
const { flexRow, alignCenter } = mixins;

const StyledSwitch = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  ${flexRow};
  ${alignCenter};

  svg {
    fill: var(--color-text);
  }
`;

const Icon = styled(motion.div)`
  ${flexRow};
  ${alignCenter};
`;

export default function ThemeSwitch() {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <StyledSwitch
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      aria-label={t("dark_mode")}
      title={t("dark_mode")}
    >
      <AnimatePresence exitBeforeEnter>
        <Icon
          key={colorMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {colorMode === "dark" ? <DarkIcon /> : <LightIcon />}
        </Icon>
      </AnimatePresence>
      <VisuallyHidden>
        {colorMode === "dark" ? t("light_mode") : t("dark_mode")}
      </VisuallyHidden>
    </StyledSwitch>
  );
}
