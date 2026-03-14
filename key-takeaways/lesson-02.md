git init -> chuyển từ local sang working environment
git add <file_name> -> đưa <file_name> vào staging để chuẩn bị commit
git add . -> add tất cả các thay đổi chưa commit vào staging
git commit -m "message" -> lưu các thay đổi ở staging với ghi chú là "message"

a. 3 file file1, file2, file3
b. git init -> 3 file vào working
c. git commit -m "init project" -> lỗi, chưa có file được add vào staging
d. git add file1 -> file 1 vào staging
e. git commit -m "add file 1" -> lưu file 1 với message "add file1"
f. git commit -m "add file" -> lỗi, chưa có file được add vào staging