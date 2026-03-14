# Tổng hợp kiến thức
## Giới thiệu các công cụ
- NVM: Node Version Manager, quản lý các phiên bản NodeJs
- NodeJs: Công cụ chạy code
- Git: Quản lý source code
- GitHub: Chia sẻ code, làm việc nhóm
- VS Code: Công cụ để viết code

## Kết nối Github
- Tạo SSH Keys bằng lệnh `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- Lấy nội dung SSH Keys bằng lệnh `cat ~/.ssh/id_rsa.pub`
- Truy cập: `https://github.com/settings/ssh/new` để thêm ssh key

## Tạo PlayWright
- Chạy lệnh `npm init playwright@latest`

## Đưa code lên GitHub
- Tạo repo ở GitHub
- Làm các bước tiếp theo:
1. Khỏi tạo repo: `git init` 
2. Liên kết với Git: `git remote add origin <ssh_link>`
3. Thêm code: `git add .`  
4. Thêm commit: `git commit -m"init project"`
5. Push code: `git push origin main`