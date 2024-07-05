# Order properties

Thông tin của 1 đơn hàng khi được lấy từ Woocommerce gồm có

## Base properties
- `ID`: Id của đơn hàng trên portal.
- `Store`: store của đơn hàng
- `Number`: mã đơn hàng (Woo)
- `Date imported`: ngày tạo của đơn hàng trên portal.
- `Date created Woo`: ngày tạo của đơn hàng trên Woo.
- `Date paid`: ngày thanh toán của đơn hàng
::: tip
Toàn bộ đơn hàng khi vừa tạo thì giá trị này luôn gần bằng với ngày tạo, đối với những đơn hàng trả sau, khi invoice được `paid`, ngày thanh toán sẽ được update lại thành ngày `paid` của invoice
:::
- `Date completed`: ngày hoàn thành đơn hàng Woo.
- `Status`: trạng thái đơn hàng, xem chi tiết hơn tại [Order Status](#statuses)
- `Private status`: internal status...
- `Shipping`: giá tiền ship
- `Total`: tổng giá trị đơn hàng
- `Payment method`: mã phương thức thanh toán, `stripe`, ..., hoặc `envoice` nếu trả sau.
- `Payment method title`: tên phương thức thanh toán.
- `Customer note`: ghi chú của khách hàng.

## Shipping address

Thông tin địa chỉ shipping của đơn hàng.

- `First name`
- `Last name`
- `Company`
- `Address 1`
- `Address 2`
- `City`
- `State`
- `Postcode`
- `Country`
- `Phone`

## Billing address

Thông tin địa chỉ billing của đơn hàng.

- `First name`
- `Last name`
- `Company`
- `Address 1`
- `Address 2`
- `City`
- `State`
- `Postcode`
- `Country`
- `Phone`
- `Email`
- `Phone`

## Line items

Danh sách các sản phẩm trong đơn hàng.

### Line item properties

Đây là thuộc tính của sản phẩm trong đơn hàng trong thời điểm đặt hàng, có thể sẽ ko trùng thuộc tính của sản phẩm trên website.

- `ID`: id của line item trên portal.
- `Image`: hình ảnh của sản phẩm
- `Name`: tên sản phẩm
- `Is variation`: sản phẩm có phải variation hay không.
- `Product type`: mô tả loại sản phẩm, ví dụ: `Size L, Color Red`
- `Quantity`: số lượng
- `Price`: giá tiền
- `Total`: tổng tiền
- `Sku`: mã SKU

### Line item Shipment

Đây là các thuộc tính sử dụng trên portal cho việc vận hành đơn hàng. Các thông tin này sẽ được nhập thông qua việc import file csv.

- `Supplier`
- `Supplier order number`
- `Tracking service`
- `Production total`: giá trị từ nhà cung cấp
- `Design file url`
- `Deliver service`: tên dịch vụ vận chuyển
- `Tracking code`: mã tracking
- `Private note`: internal note

## Invoice

Nếu đơn hành thanh toán trả sau, thông tin invoice của đơn hàng sẽ hiện ở section này. Xem thêm tại [Invoice](/invoices/invoice-properties).


##  Statuses

Trạng thái của đơn hàng được lấy từ Woo bao gồm:

- `OnHold`
- `Pending`
- `Processing`
- `Completed`
- `Cancelled`
- `Refunded`
- `Failed`
- `Trash`

và 2 trạng thái custom trên portal dành cho việc vận hành.

- `Partial Shipped`: đơn hàng được ship 1 phần
- `Shipped`: đơn hàng đã được ship toàn bộ

::: danger
Vui lòng không sử dụng trạng thái custom nào khác ngoài 8 trạng thái nào khác trên Woo, nếu không thì đơn hàng sẽ không được đồng bộ.
:::