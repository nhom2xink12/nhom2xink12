// --- Cấu hình Firebase Realtime Database ---
const firebaseConfig = {
  apiKey: "AIzaSyCyl7to9uydBNHg0Z9YlxXBEllVrPJ5cSg",
  authDomain: "nhom-2-xink-12.firebaseapp.com",
  databaseURL: "https://nhom-2-xink-12-default-rtdb.firebaseio.com",
  projectId: "nhom-2-xink-12",
  storageBucket: "nhom-2-xink-12.firebasestorage.app",
  messagingSenderId: "747008515918",
  appId: "1:747008515918:web:8b2793c9559d5de2a0481f",
  measurementId: "G-HZ7C0L6J7J"
};

// Khởi tạo Firebase
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== 'undefined' ? firebase.database() : null;

// Dữ liệu mặc định ban đầu
const INITIAL_MEMBERS = [
  {
    id: "khanh-an",
    name: "Trần Huỳnh Khánh An",
    role: "Thành viên nhóm",
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin giới thiệu của bạn tại đây.",
    contact: ""
  },
  {
    id: "phuong-tuong",
    name: "Ngô Trần Phương Tường",
    role: "Thành viên nhóm",
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin giới thiệu của bạn tại đây.",
    contact: ""
  },
  {
    id: "gia-han",
    name: "Nguyễn Gia Hân",
    role: "Thành viên nhóm",
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin giới thiệu của bạn tại đây.",
    contact: ""
  },
  {
    id: "my-duyen",
    name: "Nguyễn Thị Mỹ Duyên",
    role: "Thành viên nhóm",
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin
