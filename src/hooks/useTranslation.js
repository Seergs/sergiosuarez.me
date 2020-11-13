import { useIntl } from "gatsby-plugin-intl";

function useTranslation() {
  const intl = useIntl();

  function t(id) {
    return intl.formatMessage({ id });
  }

  return { t };
}

export default useTranslation;
