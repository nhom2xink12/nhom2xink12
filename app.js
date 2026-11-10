// --- Cấu hình Firebase Realtime Database ---
const firebaseConfig = {
    apiKey: "AIzaSyCyl7to9uydBNHg0Z9YlxXBEllVrPJ5cSg",
    authDomain: "nhom-2-xink-12.firebaseapp.com",
    projectId: "nhom-2-xink-12",
    storageBucket: "nhom-2-xink-12.firebasestorage.app",
    messagingSenderId: "747008515918",
    appId: "1:747008515918:web:8b2793c9559d5de2a0481f",
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
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin giới thiệu của bạn tại đây.",
    contact: ""
  },
  {
    id: "thuy-tram",
    name: "Phan Thùy Trâm",
    role: "Thành viên nhóm",
    bio: "Một mảnh ghép của Nhóm 2 - Lớp 12S. Hãy bổ sung thông tin giới thiệu của bạn tại đây.",
    contact: ""
  }
];

const INITIAL_LESSONS = [
  {
    id: "bai-3",
    number: 3,
    title: "Các thiết bị kết nối mạng",
    description: "Router Wi-Fi, Switch Ethernet và kết nối Internet.",
    content: `LUYỆN TẬP\n\nCâu 1: Các thiết bị kết nối mạng trong gia đình...\n\n- Router Wi-Fi: Cung cấp kết nối Internet...\n- Switch Ethernet: Kết nối nhiều thiết bị...\n- Bộ kết nối Powerline...`
  },
  {
    id: "bai-4",
    number: 4,
    title: "Giao thức mạng",
    description: "Tìm hiểu IP, TCP, tên miền và lệnh Ping.",
    content: `CÂU HỎI TRANG 25\n\nCâu 1: Giao thức IP giúp các thiết bị...`
  },
  {
    id: "bai-5",
    number: 5,
    title: "Thực hành chia sẻ tài nguyên trên mạng",
    description: "Thực hành chia sẻ ổ đĩa trên Windows.",
    content: `CHIA SẺ TOÀN BỘ MỘT Ổ ĐĨA TRÊN WINDOWS...`
  },
  {
    id: "bai-6",
    number: 6,
    title: "Giao tiếp và ứng xử trong không gian mạng",
    description: "Văn hóa giao tiếp và học tập trực tuyến.",
    content: `LUYỆN TẬP VÀ VẬN DỤNG...`
  },
  {
    id: "bai-7",
    number: 7,
    title: "HTML và cấu trúc trang web",
    description: "Cấu trúc cơ bản của một tài liệu HTML.",
    content: `LUYỆN TẬP\n\nVí dụ tạo trang web hiển thị bài thơ về sen...`
  },
  {
    id: "bai-8",
    number: 8,
    title: "Định dạng văn bản",
    description: "Sử dụng các thẻ HTML để định dạng nội dung.",
    content: `LUYỆN TẬP\n\nVí dụ trang giới thiệu dịch vụ Internet tốc độ cao...`
  },
  {
    id: "bai-9",
    number: 9,
    title: "Tạo danh sách, bảng",
    description: "Tạo bảng HTML và sinh bảng bằng Python.",
    content: `LUYỆN TẬP TRANG 56...`
  },
  {
    id: "bai-10",
    number: 10,
    title: "Tạo liên kết",
    description: "Sử dụng thẻ a để liên kết giữa các trang web.",
    content: `LUYỆN TẬP\n\nVí dụ tạo trang giới thiệu bản thân...`
  }
];

const STORAGE_KEY = "nhom2_12s_data_v1";

// Hàm lấy dữ liệu (Ưu tiên Firebase, nếu offline dùng localStorage)
async function fetchOnlineData() {
  if (!db) return getLocalFallbackData();
  try {
    const snapshot = await db.ref("app_data").once("value");
    const data = snapshot.val();
    if (data && data.members && data.lessons) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    } else {
      // Khởi tạo dữ liệu ban đầu lên Firebase nếu chưa có
      const initialData = {
        members: INITIAL_MEMBERS,
        lessons: INITIAL_LESSONS
      };
      await db.ref("app_data").set(initialData);
      return initialData;
    }
  } catch (err) {
    console.warn("Lỗi kết nối trực tuyến, chuyển sang bộ nhớ cục bộ:", err);
    return getLocalFallbackData();
  }
}

function getLocalFallbackData() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {}

  return {
    members: saved.members || INITIAL_MEMBERS,
    lessons: saved.lessons || INITIAL_LESSONS
  };
}

// Lưu một mục lên Firebase và Cục bộ
async function saveItemOnline(type, updatedItem) {
  const data = await fetchOnlineData();
  const list = data[type] || [];
  const index = list.findIndex(item => item.id === updatedItem.id);
  
  if (index !== -1) {
    list[index] = updatedItem;
  } else {
    list.push(updatedItem);
  }
  
  data[type] = list;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  if (db) {
    await db.ref(`app_data/${type}`).set(list);
  }
}

function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function makeLink(href, className) {
  const a = document.createElement("a");
  a.href = href;
  a.className = className;
  return a;
}

async function renderHome() {
  const memberList = document.getElementById("member-list");
  const lessonList = document.getElementById("lesson-list");
  if (!memberList || !lessonList) return;

  memberList.innerHTML = "";
  lessonList.innerHTML = "";

  const data = await fetchOnlineData();

  document.getElementById("member-count").textContent =
    `${data.members.length} thành viên`;
  document.getElementById("lesson-count").textContent =
    `${data.lessons.length} bài học`;

  data.members.forEach((member, index) => {
    const card = makeLink(
      `detail.html?type=member&id=${encodeURIComponent(member.id)}`,
      "member-card"
    );

    const avatar = makeElement(
      "div",
      `avatar tone-${index % 5}`,
      member.name.trim().charAt(0) || "✿"
    );
    card.append(avatar);
    card.append(makeElement("h3", "", member.name));
    card.append(makeElement("p", "", member.role || "Thành viên nhóm"));

    const arrow = makeElement("div", "card-arrow");
    arrow.append(makeElement("span", "", "Xem hồ sơ"));
    arrow.append(makeElement("span", "", "↗"));
    card.append(arrow);
    memberList.append(card);
  });

  data.lessons.forEach(lesson => {
    const card = makeLink(
      `detail.html?type=lesson&id=${encodeURIComponent(lesson.id)}`,
      "lesson-card"
    );

    card.append(makeElement("div", "lesson-icon", "📄"));

    const info = makeElement("div", "lesson-info");
    info.append(makeElement(
      "small", "", `BÀI ${lesson.number} · TIN HỌC`
    ));
    info.append(makeElement("h3", "", lesson.title));
    info.append(makeElement("p", "", lesson.description || "Chưa có mô tả ngắn."));

    card.append(info);
    card.append(makeElement("span", "lesson-arrow", "↗"));
    lessonList.append(card);
  });

  // Modal xử lý thêm bài học
  const openModalBtn = document.getElementById("open-add-lesson-modal");
  const closeModalBtn = document.getElementById("close-add-lesson-modal");
  const modalOverlay = document.getElementById("add-lesson-modal");
  const addForm = document.getElementById("add-lesson-form");

  if (openModalBtn && closeModalBtn && modalOverlay && addForm) {
    openModalBtn.onclick = () => {
      modalOverlay.style.display = "grid";
    };
    closeModalBtn.onclick = () => {
      modalOverlay.style.display = "none";
      addForm.reset();
    };
    modalOverlay.onclick = (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
        addForm.reset();
      }
    };
    addForm.onsubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(addForm);
      const number = parseInt(formData.get("number")) || (data.lessons.length + 1);
      const title = String(formData.get("title") || "").trim();
      const description = String(formData.get("description") || "").trim();
      const content = String(formData.get("content") || "").trim();
      const id = `bai-custom-${Date.now()}`;

      if (!title) return;

      const newLesson = { id, number, title, description, content };
      await saveItemOnline("lessons", newLesson);

      modalOverlay.style.display = "none";
      addForm.reset();
      renderHome();
    };
  }
}

async function renderDetail() {
  const root = document.getElementById("detail-page");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const id = params.get("id");
  const data = await fetchOnlineData();

  const collection = type === "member"
    ? data.members
    : type === "lesson"
      ? data.lessons
      : [];

  const item = collection.find(entry => entry.id === id);

  if (!item) {
    root.replaceChildren(
      makeElement("div", "empty-state",
        "Không tìm thấy nội dung. Vui lòng quay lại trang chủ.")
    );
    return;
  }

  document.title = `${type === "member" ? item.name : item.title} | Nhóm 2 - 12S`;

  const isMember = type === "member";
  const hero = makeElement("section", "detail-hero");

  hero.append(makeElement(
    "span", "eyebrow",
    isMember ? "MEMBER PROFILE" : `BÀI HỌC SỐ ${item.number}`
  ));

  hero.append(makeElement(
    "h1", "", isMember ? item.name : item.title
  ));

  hero.append(makeElement(
    "p", "",
    isMember ? (item.role || "Thành viên nhóm") : (item.description || "")
  ));

  const actions = makeElement("div", "action-row");
  const editButton = makeElement("button", "btn btn-primary", "✎ Chỉnh sửa");
  editButton.type = "button";
  actions.append(editButton);
  hero.append(actions);

  const panel = makeElement("section", "detail-panel");
  panel.append(makeElement(
    "h2", "", isMember ? "Thông tin thành viên" : "Nội dung bài học"
  ));

  const content = makeElement("div", "detail-content");
  content.textContent = isMember
    ? item.bio
    : item.content;

  panel.append(content);

  if (isMember && item.contact) {
    const contact = makeElement("p", "");
    contact.style.marginTop = "18px";
    contact.textContent = `Liên hệ: ${item.contact}`;
    panel.append(contact);
  }

  const editor = makeElement("form", "edit-form");
  editor.hidden = true;

  function addField(labelText, name, value, multiline = false) {
    const wrapper = makeElement("div", "field");
    const label = makeElement("label", "", labelText);
    label.htmlFor = `edit-${name}`;

    const field = document.createElement(multiline ? "textarea" : "input");
    field.id = `edit-${name}`;
    field.name = name;
    field.value = value || "";
    field.required = name === "name" || name === "title";

    wrapper.append(label, field);
    editor.append(wrapper);
  }

  if (isMember) {
    addField("Họ và tên", "name", item.name);
    addField("Vai trò", "role", item.role);
    addField("Giới thiệu", "bio", item.bio, true);
    addField("Thông tin liên hệ", "contact", item.contact);
  } else {
    addField("Tiêu đề bài học", "title", item.title);
    addField("Mô tả ngắn", "description", item.description, true);
    addField("Nội dung bài học", "content", item.content, true);
  }

  const formActions = makeElement("div", "action-row");
  const saveButton = makeElement("button", "btn btn-primary", "Lưu thay đổi");
  saveButton.type = "submit";

  const cancelButton = makeElement("button", "btn", "Hủy");
  cancelButton.type = "button";

  formActions.append(saveButton, cancelButton);
  editor.append(formActions);
  panel.append(editor);

  editButton.addEventListener("click", () => {
    editor.hidden = false;
    editButton.hidden = true;
    editor.querySelector("input, textarea")?.focus();
  });

  cancelButton.addEventListener("click", () => {
    editor.reset();
    editor.hidden = true;
    editButton.hidden = false;
  });

  editor.addEventListener("submit", async event => {
    event.preventDefault();

    const formData = new FormData(editor);
    const updated = { ...item };

    for (const key of isMember
      ? ["name", "role", "bio", "contact"]
      : ["title", "description", "content"]) {
      updated[key] = String(formData.get(key) || "").trim();
    }

    await saveItemOnline(isMember ? "members" : "lessons", updated);

    renderDetail();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  root.replaceChildren(hero, panel);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderDetail();
  
  // Tự động cập nhật giao diện khi có thành viên khác vừa sửa dữ liệu
  if (db) {
    db.ref("app_data").on("value", () => {
      renderHome();
      renderDetail();
    });
  }
});
