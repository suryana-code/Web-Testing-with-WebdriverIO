import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class productsPage extends Page {
  get pageTitle() {
    return $('[data-test="title"]');
  }
  get productTitle() {
    return $('[data-test="inventory-item-name"]');
  }
  get productImage() {
    return $('[data-test="inventory-item-sauce-labs-backpack-img"]');
  }
  get productDescription() {
    return $('[data-test="inventory-item-desc"]');
  }
  get productPrice() {
    return $('[data-test="inventory-item-price"]');
  }
  get btnAdd2Cart() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  get btnRemove() {
    return $('[data-test="remove-sauce-labs-backpack"]');
  }
  get iconCard() {
    return $('[data-test="shopping-cart-link"]');
  }
  get btnContinueShop() {
    return $("#continue-shopping");
  }

  //detail
  get productTitleDetail() {
    return $('[data-test="inventory-item-name"]');
  }
  get productDescriptionDetail() {
    return $('[data-test="inventory-item-desc"]');
  }
  get productPriceDetail() {
    return $('[data-test="inventory-item-price"]');
  }

  async dataProduct() {
    await this.pageTitle.waitForExist({ timeout: 5000 });
    const existance = await Promise.all([
      this.productImage.isExisting(),
      this.productTitle.isExisting(),
      this.productDescription.isExisting(),
      this.productPrice.isExisting(),
    ]);
    const title = await this.productTitle.getText();
    const desc = await this.productDescription.getText();
    const price = await this.productPrice.getText();

    const isRemoveExist = await this.btnRemove.isExisting();
    const isAddExist = await this.btnAdd2Cart.isExisting();
    if (isRemoveExist) {
      await this.btnRemove.click();
      await this.btnAdd2Cart.waitForClickable({ timeout: 3000 });
      await this.btnAdd2Cart.click();
    } else if (isAddExist) {
      await this.btnAdd2Cart.click();
    } else {
      console.error("ℹ️ button add or remove not show");
    }

    const titleInDetail = await this.productTitleDetail.getText();
    const desctitleInDetail = await this.productDescriptionDetail.getText();
    const pricetitleInDetail = await this.productPriceDetail.getText();

    await this.iconCard.click();
    await this.btnContinueShop.click();

    return {
      existance,
      title,
      desc,
      price,
      titleInDetail,
      desctitleInDetail,
      pricetitleInDetail,
    };
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new productsPage();
