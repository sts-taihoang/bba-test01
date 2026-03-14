# JavaScript (nâng cao)
## 1. Object & Array
- Array (mảng): là kiểu dữ liệu dùng để lưu trữ một danh sách có thứ tự các giá trị.
- Object (đối tượng): là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key – value (khoá – giá trị).

## 2. Function
- Function (hàm): là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.
- Viết 1 lần, dùng nhiều lần. Cần sửa → sửa 1 chỗ duy nhất.

## 3. Phạm vi của biến
- Block scope (khối): biến được khai báo trong cặp ngoặc nhọn
1. var: không bị giới hạn bởi cặp ngoặc nhọn
2. let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined

- Function scope (hàm): biến được khai báo trong một hàm
1. Cả let/var/const ra ngoài hàm đều bị undefined

- Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm

## 4. Break & continue
* `break` dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
* `continue` dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.

## 5. Câu điều kiện nâng cao
- `if / else` Thực thi code khác nhau cho trường hợp true và false
- `if..else..if` Kiểm tra nhiều điều kiện theo thứ tự
- Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho `if...else`

## 6. Vòng lặp nâng cao
- `for...in Loop` dùng để duyệt qua các thuộc tính (properties) của một object.
- `forEach` Method: Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng `break` hoặc `continue`