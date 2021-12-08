# Background jobs

Thông tin về các background services của hệ thống cho bạn hiểu hơn về việc data hoạt động trên portal.

Timezone trên hệ thống là UTC+0

- Fetching orders: every 2 hours
- Fetching invoices: hourly at 30 minutes
- Pairing invoices with orders: every ten minutes
- Backup database: daily at 00:30
- Compare total orders from portal to Woocommerce for the last day: daily at 01:00
- Standalize order number of orders and invoices: hourly
- Update missing SKU and image for line items: every three hours
