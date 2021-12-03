module.exports = {
    title: 'Portal docs',
    description: 'Portal documentation about .......',
    themeConfig: {
        sidebar: [
            {
                text: 'Setup',
                children: prefix('setup', ['store.md', 'envoice.md', 'supplier.md', 'tracking-service.md']),
            },
            {
                text: 'Orders',
                children: prefix('orders', ['order-properties.md'])
            }
        ],
    }
}

function prefix(prefix, children) {
    return children.map((child) => `/${prefix}/${child}`)
}
