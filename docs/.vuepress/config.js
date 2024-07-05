module.exports = {
    title: 'Portal docs',
    description: 'Portal documentation about .......',
    themeConfig: {
        sidebar: [
            {
                text: 'Setup',
                children: prefix('setup', [
                    'store.md',
                    'envoice.md',
                    'supplier.md',
                    'tracking-service.md'
                ]),
            },
            {
                text: 'Orders',
                children: prefix('orders', [
                    'order-properties.md',
                    'order-operation.md',
                    'sync-orders.md'
                ])
            },
            {
                text: 'Invoices',
                children: prefix('invoices', [
                    'invoice-properties.md',
                    'invoice-functions.md'
                ])
            },
            {
                text: 'Coupons',
                children: prefix('coupons', [
                    'manage-woo-coupons.md'
                ])
            },
            {
                text: 'Background jobs',
                children: prefix('background-jobs', [
                    'background-jobs.md',
                ])
            },
        ],
    }
}

function prefix(prefix, children) {
    return children.map((child) => `/${prefix}/${child}`)
}
