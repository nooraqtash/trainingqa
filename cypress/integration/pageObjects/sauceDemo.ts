class SauceDemoPage{

    //path
    baseURL= 'https://www.saucedemo.com'
    homepageURL= '/v1/inventory.html'

    //variables
    firstItemButton= ':nth-child(1) > .pricebar > .btn_primary';
    lastItemButton= ':nth-child(6) > .pricebar > .btn_primary'
    shoppingCart= '#shopping_cart_container'
    removeButtonforFirstItem= ':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary'
    firstNameField = '[data-test="firstName"]'
    lastNameField = '[data-test="lastName"]'
    postCodeField = '[data-test="postalCode"]'
    checkOutButton= '.btn_action'
    submitFormButton= '.btn_primary'
    firstItemInCart='#item_4_title_link > .inventory_item_name'
    lastItemInCart= '#item_3_title_link > .inventory_item_name'
    overview= '.subheader'
    header= '.complete-header'

}
export const saucedemoPage: SauceDemoPage = new SauceDemoPage();