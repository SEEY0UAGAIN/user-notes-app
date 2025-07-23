# User Notes App

โปรเจคนี้เป็นเว็บแอปพลิเคชันบันทึกโน้ต (Notes) แบบ CRUD ที่พัฒนาโดยใช้ **Node.js**, **Express**, **MongoDB** และ **EJS** เป็น Template Engine พร้อมระบบล็อกอินผู้ใช้ด้วย session

---

## ฟีเจอร์หลัก

- ลงทะเบียนผู้ใช้ (Register)  
- เข้าสู่ระบบ (Login)  
- จัดการโน้ตส่วนตัว (เพิ่ม, แก้ไข, ลบ, ทำเครื่องหมายว่าเสร็จสิ้น)  
- แสดงโน้ตของผู้ใช้แต่ละคนแยกกัน  
- ปุ่มแสดง/ซ่อนฟอร์มเพิ่มโน้ต  
- ปุ่ม Edit แสดงฟอร์มแก้ไขเฉพาะโน้ตที่เลือก  
- ปุ่ม Done สำหรับทำเครื่องหมายโน้ตเสร็จสิ้น  
- ปุ่ม Logout ออกจากระบบ

---

## เทคโนโลยีที่ใช้

- Node.js  
- Express.js  
- MongoDB (ใช้ mongoose ในการเชื่อมต่อ)  
- EJS Template Engine  
- Bootstrap 5 (CSS Framework)  
- bcrypt (สำหรับ hash รหัสผ่าน)  
- express-session + connect-mongo (จัดการ session และเก็บใน MongoDB)

---
