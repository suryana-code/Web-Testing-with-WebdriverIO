import { browser } from "@wdio/globals";

export async function setLoginSession() {
  await browser.setCookies([
    {
      name: "session-username",
      value: "standard_user",
      domain: "www.saucedemo.com",
      path: "/",
    },
  ]);

  await browser.refresh();
}
