import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Portal docs",
    description: "Portal docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Setup',
                items: prefix('setup', [
                    'store.md',
                    'envoice.md',
                    'supplier.md',
                    'tracking-service.md'
                ]),
            },
            {
                text: 'Orders',
                items: prefix('orders', [
                    'order-properties.md',
                    'order-operation.md',
                    'sync-orders.md'
                ])
            },
            {
                text: 'Invoices',
                items: prefix('invoices', [
                    'invoice-properties.md',
                    'invoice-functions.md'
                ])
            },
            {
                text: 'Coupons',
                items: prefix('coupons', [
                    'manage-woo-coupons.md'
                ])
            },
            {
                text: 'Background jobs',
                items: prefix('background-jobs', [
                    'background-jobs.md',
                ])
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})

function prefix(prefix, items) {
    return items.map(function (child) {
        let name = child.split('.')[0];
        return {
            text: name,
            link: `${prefix}/${child}`
        }
    });
}