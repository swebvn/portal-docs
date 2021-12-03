# Invoice properties

Thông tin invoice được đồng bộ về từ Envoice, được phân loại chủ yếu theo 2 trạng thái: `Paid` và `Unpaid`.

# Base properties

- `ID`: id của invoice trên portal
- `Order`: portal sẽ tự động map invoice với order tương ứng trên hệ thống
- `Number`: order number trên Envoice (truyền từ Woo) khi tạo đơn hàng
- `Issued on`: ngày tạo invoice
- `Client name`: tên khách hàng
- `Client email`: email khách hàng
- `Total amount`: tổng tiền của invoice
- `Status`: trạng thái của invoice, gồm có: `Draft`, `Paid`, `Unpaid`, `Overdue`, `Void`. Nhưng thường chỉ dùng `Paid` và `Unpaid`
- `Paid at`: thời gian khách hành thanh toán
- `Pair status`: trạng thái của invoice cho việc maping với đơn hàng, gồm có: `Paired`, `Unpaired`, `Ignored`
- `EV ID`: id của invoice trên Envoice