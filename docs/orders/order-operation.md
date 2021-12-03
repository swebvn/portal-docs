# Order operation

## Download Excel

Portal hỗ trợ việc export đơn hàng thành file excel dùng cho team vận hành xử lí.

Trên trang danh sách đơn hàng, bạn chọn các đơn hàng cần export, có thể sử dụng filter để lấy đúng các đơn hàng theo ngày cần thiết.

![](./img/orders-filter.png)

Sau khi chọn các đơn hàng cần export, sẽ có 1 select box hiện ra, bạn chọn `Download excel` và nhấn vào nút hình play button để execute action.

![](./img/action-download-excel.png)

Thông tin file excel gồm có:

- `Website`: domain của store
- `Order date`: ngày tạo của đơn hàng
- `Paid date`
- `Order status`
- `Payment method`
- `Order number`
- `Email (billing)`
- `Phone (billing)`
- `Full name (shipping)`
- `Address 1 & 2 (shipping)`
- `City (shippping)`
- `State code (shipping)`
- `Postcode (shipping)`
- `Country code (shipping)`
- `Customer note (shipping)`
- `Image URL`
- `SKU`
- `Item name`
- `Product type`
- `Quantity`
- `Product current price`

Mỗi dòng trong file excel tương ứng với 1 `Line item`. Ví dụ 1 đơn hàng có 2 sản phẩm thì sẽ bao gồm 2 dòng.

## Import supplier shipment

## Import tracking shipment