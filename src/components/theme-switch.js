import React from "react";
import styled, { css } from "styled-components/macro";
import useTranslation from "../hooks/useTranslation";
import mixins from "../theme/mixins";
import LightIcon from "../svg/light.svg";
import DarkIcon from "../svg/dark.svg";
import { motion, AnimatePresence } from "framer-motion";
const { flexRow, alignCenter } = mixins;

const StyledSwitch = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const Icon = styled(motion.div)``;

export default function ThemeSwitch({ isEnabled, onToggle }) {
  const { t } = useTranslation();
  return (
    <StyledSwitch
      onClick={onToggle}
      aria-label={t("dark_mode")}
      title={t("dark_mode")}
    >
      <AnimatePresence exitBeforeEnter>
        <Icon
          key={isEnabled ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {isEnabled ? <DarkIcon /> : <LightIcon />}
        </Icon>
      </AnimatePresence>
    </StyledSwitch>
  );
}
