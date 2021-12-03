module.exports = {
    title: 'Portal docs',
    description: 'Portal documentation about .......',
    head: [
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i",
        rel: "stylesheet",
        type: "text/css"
      }
    ]
    ],
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
                    'order-operation.md'
                ])
            },
            {
                text: 'Invoices',
                children: prefix('invoices', [
                    'invoice-properties.md'
                ])
            },

        ],
    }
}

function prefix(prefix, children) {
    return children.map((child) => `/${prefix}/${child}`)
}
