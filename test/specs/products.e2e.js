import { expect } from "@wdio/globals";
import { setLoginSession } from "../utils/seassion.helper.js";
import productsPage from "../pageobjects/products.page.js";

describe("Check product on homepage and detail product", () => {
  beforeEach(async () => {
    await setLoginSession();
    await productsPage.open();
  });
  it("should product data on homepage have the same details, and can be added to cart", async () => {
    await productsPage.dataProduct();
    const data = await productsPage.dataProduct();
    console.log("status: ", data.existance);

    expect(data.titleInDetail).toEqual(data.title);
    expect(data.desctitleInDetail).toEqual(data.desc);
    expect(data.pricetitleInDetail).toEqual(data.price);
  });
});
