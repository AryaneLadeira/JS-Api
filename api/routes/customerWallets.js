module.exports = app => {
    const controller = app.controllers.customerWallets

    app.route('/api/customer-wallets')
    .get(controller.listCustomerWallets)

    app.route('/api/new-customer-wallet')
    .post(controller.saveCustomerWallets)

    app.route('/api/remove-customer-wallet/:customerId')
    .delete(controller.removeCustomerWallets)

    app.route('/api/update-customer-wallet/:customerId')
    .put(controller.updateCustomerWallets)
}