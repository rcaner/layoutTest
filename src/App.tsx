import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Layout from "./Layout";
import messages from "./messages";
import "./App.scss";
import Main from "./Main";
function App() {
  const [locale, setLocale] = useState("en");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} children={<Main />} />
    </IntlProvider>
  );
}
export default App;
