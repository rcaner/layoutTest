import React from "react";
import "./languageSwitcher.scss";
import { useIntl } from "react-intl";
interface IProps {
  handleChangeLanguage(lang: string): void;
  languages: {
    code: string;
    name: string;
  }[];
  langCode: string;
  collapsed: boolean;
}
const LanguageSwitcherSelector = (props: IProps) => {
  const intl = useIntl();
  function onChange(e: any) {
    props.handleChangeLanguage(e.target.className);
  }

  const { languages } = props;
  const options = languages.map((language) => {
    if (language.code !== props.langCode) {
      return (
        <li key={language.code} onClick={onChange}>
          <div data-value={language.code} className={language.code}></div>
        </li>
      );
    }
    return null;
  });

  return (
    <div className="lang">
      <div className={props.langCode}></div>
      <ul className="dropdown">{options}</ul>
      {props.collapsed ? null : (
        <span>{intl.formatMessage({ id: "Language" })}</span>
      )}
    </div>
  );
};

export default LanguageSwitcherSelector;
