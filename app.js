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

// Dữ liệu mặc định ban đầu nếu Firebase chưa có
const INITIAL_MEMBERS = [
  { id: "khanh-an", name: "Trần Huỳnh Khánh An", role: "Thành viên nhóm", bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S.", contact: "", avatar: "" },
  { id: "phuong-tuong", name: "Ngô Trần Phương Tường", role: "Thành viên nhóm", bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S.", contact: "", avatar: "" },
  { id: "gia-han", name: "Nguyễn Gia Hân", role: "Thành viên nhóm", bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S.", contact: "", avatar: "" },
  { id: "my-duyen", name: "Nguyễn Thị Mỹ Duyên", role: "Thành viên nhóm", bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S.", contact: "", avatar: "" },
  { id: "thanh-truc", name: "Lê Thanh Trúc", role: "Thành viên nhóm", bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S.", contact: "", avatar: "" }
];

document.addEventListener("DOMContentLoaded", () => {
  if (!db) {
    console.error("Firebase chưa được khởi tạo!");
    return;
  }

  // Khởi tạo dữ liệu mẫu lên Firebase nếu chưa có
  const membersRef = db.ref("members");
  membersRef.once("value", (snapshot) => {
    if (!snapshot.exists()) {
      INITIAL_MEMBERS.forEach(m => {
        db.ref("members/" + m.id).set(m);
      });
    }
  });

  // Kiểm tra đang ở trang nào để render phù hợp
  const path = window.location.pathname;
  if (path.includes("detail.html")) {
    initDetailPage();
  } else {
    initHomePage();
  }
});

// --- TRANG CHỦ (index.html) ---
function initHomePage() {
  const memberListEl = document.getElementById("member-list");
  const memberCountEl = document.getElementById("member-count");

  // Lắng nghe dữ liệu realtime từ Firebase cho danh sách thành viên
  db.ref("members").on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    memberListEl.innerHTML = "";
    const members = Object.values(data);
    memberCountEl.textContent = `${members.length} thành viên`;

    members.forEach((m, index) => {
      const toneClass = `tone-${(index % 4) + 1}`;
      
      // Hiển thị ảnh đại diện nếu có URL, ngược lại hiển thị chữ cái đầu
      let avatarHTML = '';
      if (m.avatar && m.avatar.trim() !== '') {
        avatarHTML = `<div class="avatar"><img src="${m.avatar}" alt="${m.name}"></div>`;
      } else {
        const firstLetter = m.name ? m.name.charAt(0) : "M";
        avatarHTML = `<div class="avatar ${toneClass}">${firstLetter}</div>`;
      }

      const card = document.createElement("a");
      card.className = "member-card";
      card.href = `detail.html?id=${m.id}`;
      card.innerHTML = `
        ${avatarHTML}
        <h3>${m.name}</h3>
        <p>${m.role || 'Thành viên nhóm'}</p>
        <div class="card-arrow">Xem & cập nhật thông tin <span>→</span></div>
      `;
      memberListEl.appendChild(card);
    });
  });

  // Tải danh sách bài học
  loadLessons();
}

// --- TRANG CHI TIẾT & CẬP NHẬT THÔNG TIN (detail.html) ---
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get("id");
  const detailPageEl = document.getElementById("detail-page");

  if (!memberId) {
    detailPageEl.innerHTML = `<div class="empty-state">Không tìm thấy thành viên! <br><a href="index.html" class="btn btn-primary" style="margin-top:15px;display:inline-block;">Về trang chủ</a></div>`;
    return;
  }

  db.ref("members/" + memberId).on("value", (snapshot) => {
    const member = snapshot.val();
    if (!member) {
      detailPageEl.innerHTML = `<div class="empty-state">Thành viên không tồn tại!</div>`;
      return;
    }

    renderMemberDetail(member);
  });
}

function renderMemberDetail(member) {
  const detailPageEl = document.getElementById("detail-page");
  let avatarDisplay = '';
  if (member.avatar && member.avatar.trim() !== '') {
    avatarDisplay = `<img src="${member.avatar}" alt="${member.name}" class="avatar-preview" />`;
  } else {
    avatarDisplay = `<div class="avatar tone-1" style="width:70px; height:70px; font-size:24px; border-radius:50%;">${member.name.charAt(0)}</div>`;
  }

  detailPageEl.innerHTML = `
    <div class="detail-hero">
      <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
        ${avatarDisplay}
        <div>
          <span class="eyebrow">HỒ SƠ CÁ NHÂN</span>
          <h1>${member.name}</h1>
          <p>${member.role || 'Thành viên nhóm 2 - 12S'}</p>
        </div>
      </div>
    </div>

    <div class="detail-panel">
      <h2>Thông tin chi tiết</h2>
      <div class="detail-content">
        <p><strong>Giới thiệu / Tiểu sử:</strong></p>
        <p style="color: var(--muted); margin-bottom: 15px;">${member.bio || 'Chưa có thông tin giới thiệu.'}</p>
        
        <p><strong>Thông tin liên hệ / Mạng xã hội:</strong></p>
        <p style="color: var(--muted);">${member.contact || 'Chưa cập nhật thông tin liên hệ.'}</p>
      </div>

      <div class="action-row">
        <button class="btn btn-primary" id="edit-btn">✏️ Tự cập nhật thông tin của tôi</button>
      </div>
    </div>

    <div id="edit-section" style="display: none; margin-top: 20px;" class="detail-panel">
      <h2>Chỉnh sửa thông tin cá nhân</h2>
      <form id="edit-form" class="edit-form">
        <div class="field">
          <label>Họ và tên</label>
          <input type="text" id="input-name" value="${member.name || ''}" required />
        </div>
        <div class="field">
          <label>Vai trò / Chức vụ trong nhóm</label>
          <input type="text" id="input-role" value="${member.role || ''}" />
        </div>
        <div class="field">
          <label>Ảnh đại diện (Nhập Link ảnh trực tuyến - URL)</label>
          <input type="text" id="input-avatar" value="${member.avatar || ''}" placeholder="https://example.com/avatar.jpg" />
          <small style="color: var(--muted); font-size: 11px;">Bạn có thể tải ảnh lên Imgur / Google Drive công khai và dán link trực tiếp vào đây.</small>
        </div>
        <div class="field">
          <label>Giới thiệu bản thân (Bio)</label>
          <textarea id="input-bio">${member.bio || ''}</textarea>
        </div>
        <div class="field">
          <label>Thông tin liên hệ (Facebook, Email, SĐT...)</label>
          <input type="text" id="input-contact" value="${member.contact || ''}" placeholder="VD: facebook.com/tentaikhoan" />
        </div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
          <button type="button" class="btn" id="cancel-btn">Hủy bỏ</button>
        </div>
      </form>
    </div>
  `;

  // Xử lý sự kiện bật/tắt form chỉnh sửa
  const editBtn = document.getElementById("edit-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const editSection = document.getElementById("edit-section");
  const editForm = document.getElementById("edit-form");

  editBtn.addEventListener("click", () => {
    editSection.style.display = "block";
    editBtn.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    editSection.style.display = "none";
    editBtn.style.display = "inline-block";
  });

  // Xử lý lưu thông tin lên Firebase
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedData = {
      id: member.id,
      name: document.getElementById("input-name").value.trim(),
      role: document.getElementById("input-role").value.trim(),
      avatar: document.getElementById("input-avatar").value.trim(),
      bio: document.getElementById("input-bio").value.trim(),
      contact: document.getElementById("input-contact").value.trim()
    };

    db.ref("members/" + member.id).set(updatedData)
      .then(() => {
        alert("Cập nhật thông tin thành công! Mọi người trong nhóm đã có thể thấy thay đổi này.");
        editSection.style.display = "none";
        editBtn.style.display = "inline-block";
      })
      .catch((error) => {
        alert("Có lỗi xảy ra: " + error.message);
      });
  });
}

// --- TÀI LIỆU & BÀI HỌC (Trang chủ) ---
function loadLessons() {
  const lessonListEl = document.getElementById("lesson-list");
  const lessonCountEl = document.getElementById("lesson-count");

  db.ref("lessons").on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      lessonListEl.innerHTML = `<p style="grid-column: span 2; color: var(--muted); text-align:center; padding: 20px;">Chưa có bài học nào.</p>`;
      lessonCountEl.textContent = "0 bài";
      return;
    }

    lessonListEl.innerHTML = "";
    const lessons = Object.values(data);
    lessonCountEl.textContent = `${lessons.length} bài`;

    lessons.forEach((l) => {
      const card = document.createElement("div");
      card.className = "lesson-card";
      card.innerHTML = `
        <div class="lesson-icon">📚</div>
        <div class="lesson-info">
          <small>${l.tag || 'TÀI LIỆU'}</small>
          <h3>${l.title}</h3>
        </div>
      `;
      lessonListEl.appendChild(card);
    });
  });
}
