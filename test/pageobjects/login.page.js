import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }
  get pageTitle() {
    return $('[data-test="title"]');
  }
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();

    await browser.waitUntil(
      async () =>
        (await this.pageTitle.isDisplayed()) ||
        (await this.errorMessage.isDisplayed()),
      {
        timeout: 5000,
        timeoutMsg: "popup save password tidak tampil",
      }
    );
  }

  open() {
    return super.open("");
  }
}

export default new LoginPage();
