import { browser, expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import productsPage from "../pageobjects/products.page.js";
import loginData from "../data/loginData.json";

describe("Login with INVALID credential", () => {
  loginData.invalid.forEach(({ username, password }) => {
    it(`should not be login with invalid username: "${username}" & password: "${password}"`, async () => {
      await LoginPage.open();

      await LoginPage.login(username, password);
      await expect(LoginPage.errorMessage).toBeExisting();
    });
  });
});

describe("Login with VALID credential", () => {
  loginData.valid.forEach(({ username, password }) => {
    it(`should login with valid username: "${username}" & password: "${password}"`, async () => {
      await LoginPage.open();

      await LoginPage.login(username, password);
      await expect(productsPage.pageTitle).toBeExisting();
      await expect(productsPage.pageTitle).toHaveText("Products");

      console.log("Cookies: ", await browser.getCookies());
    });
  });
});
