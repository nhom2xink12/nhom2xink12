const MEMBERS = [
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

const LESSONS = [
  {
    id: "bai-3",
    number: 3,
    title: "Các thiết bị kết nối mạng",
    description: "Router Wi-Fi, Switch Ethernet và kết nối Internet.",
    content: `LUYỆN TẬP

Câu 1: Các thiết bị kết nối mạng trong gia đình

- Router Wi-Fi: Cung cấp kết nối Internet và kết nối các thiết bị trong mạng không dây.
- Switch Ethernet: Kết nối nhiều thiết bị có dây trong mạng LAN.
- Bộ kết nối Powerline: Truyền dữ liệu thông qua hệ thống dây điện trong nhà.

Câu 2: Có thể kết nối Internet qua điện thoại di động bằng cách bật điểm truy cập cá nhân hoặc sử dụng thiết bị định tuyến 3G/4G.

VẬN DỤNG

Câu 1: Hành khách trên xe khách có thể truy cập Internet qua Wi-Fi.

Cách thực hiện:
- Trang bị bộ phát Wi-Fi di động có SIM 4G/5G.
- Thiết bị nhận tín hiệu di động từ trạm phát sóng.
- Chuyển tín hiệu thành mạng Wi-Fi để hành khách kết nối.
- Cấp nguồn cho thiết bị từ nguồn điện trên xe.`
  },
  {
    id: "bai-4",
    number: 4,
    title: "Giao thức mạng",
    description: "Tìm hiểu IP, TCP, tên miền và lệnh Ping.",
    content: `CÂU HỎI TRANG 25

Câu 1: Giao thức IP giúp các thiết bị xác định địa chỉ và trao đổi dữ liệu trên Internet.

- Địa chỉ IP: Xác định thiết bị gửi và nhận dữ liệu.
- Header IP: Chứa địa chỉ nguồn, địa chỉ đích và thông tin gói tin.
- Định tuyến: Xác định đường đi của dữ liệu.

Câu 2: Giao thức TCP

- Thiết lập kết nối giữa máy gửi và máy nhận.
- Chia dữ liệu thành các gói nhỏ.
- Phát hiện lỗi và truyền lại dữ liệu khi cần.
- Kiểm soát luồng dữ liệu.

LUYỆN TẬP

Các quy tắc trong một cuộc gọi điện thoại tương tự như giao thức mạng, giúp quá trình trao đổi dữ liệu diễn ra theo trình tự.

VẬN DỤNG

Câu 1: Tên miền dễ nhớ, có cấu trúc phân cấp và linh hoạt. Ví dụ: .com, .vn và các tên miền cấp dưới. VNNIC là Trung tâm Internet Việt Nam.

Câu 2: Lệnh ping dùng để kiểm tra khả năng kết nối mạng bằng các gói tin ICMP Echo Request/Reply.`
  },
  {
    id: "bai-5",
    number: 5,
    title: "Thực hành chia sẻ tài nguyên trên mạng",
    description: "Thực hành chia sẻ ổ đĩa trên Windows.",
    content: `CHIA SẺ TOÀN BỘ MỘT Ổ ĐĨA TRÊN WINDOWS

1. Chuẩn bị: Đăng nhập bằng tài khoản có quyền phù hợp và xác định ổ đĩa cần chia sẻ.

2. Chia sẻ ổ đĩa:
- Nhấp chuột phải vào ổ đĩa, chọn Properties.
- Mở tab Sharing.
- Chọn Advanced Sharing.
- Đánh dấu Share this folder.
- Cấu hình Permissions phù hợp.
- Nhấn OK để hoàn tất.

3. Kiểm tra:
Trên máy tính khác trong cùng mạng LAN, mở File Explorer và truy cập địa chỉ mạng của máy tính chia sẻ.

LƯU Ý: Chỉ cấp quyền truy cập cho người dùng đáng tin cậy.`
  },
  {
    id: "bai-6",
    number: 6,
    title: "Giao tiếp và ứng xử trong không gian mạng",
    description: "Văn hóa giao tiếp và học tập trực tuyến.",
    content: `LUYỆN TẬP VÀ VẬN DỤNG

1. Kể về trải nghiệm học tập nhóm trực tuyến qua Zalo hoặc Google Meet.

2. Một buổi học nhóm trực tuyến hiệu quả cần:
- Chuẩn bị nội dung trước buổi học.
- Đúng giờ và tôn trọng người đang phát biểu.
- Chia sẻ tài liệu rõ ràng.
- Bảo vệ thông tin cá nhân và tài khoản.

3. Bài tập: Viết thư điện tử xin bạn cho mượn vở ghi chép khi bản thân nghỉ học vì bị ốm.

Gợi ý: Thư cần có tiêu đề, lời chào, nội dung yêu cầu, lời cảm ơn và chữ ký.`
  },
  {
    id: "bai-7",
    number: 7,
    title: "HTML và cấu trúc trang web",
    description: "Cấu trúc cơ bản của một tài liệu HTML.",
    content: `LUYỆN TẬP

Ví dụ tạo trang web hiển thị bài thơ về sen:

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Văn bản về sen</title>
</head>
<body>
  <p>
    Trong đầm gì đẹp bằng sen<br>
    Lá xanh bông trắng lại chen nhị vàng<br>
    Nhị vàng bông trắng lá xanh<br>
    Gần bùn mà chẳng hôi tanh mùi bùn
  </p>
</body>
</html>

GHI NHỚ
- <!DOCTYPE html> khai báo tài liệu HTML5.
- <head> chứa thông tin về trang.
- <title> đặt tiêu đề trên tab trình duyệt.
- <body> chứa nội dung hiển thị trên trang web.`
  },
  {
    id: "bai-8",
    number: 8,
    title: "Định dạng văn bản",
    description: "Sử dụng các thẻ HTML để định dạng nội dung.",
    content: `LUYỆN TẬP

Ví dụ trang giới thiệu dịch vụ Internet tốc độ cao:

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>INTERNET TỐC ĐỘ CAO</title>
</head>
<body>
  <h1>INTERNET TỐC ĐỘ CAO</h1>
  <p><em>Dịch vụ Internet cáp quang chất lượng cao,
  ổn định, giá cả hợp lí.</em></p>

  <h2><strong>Các tính năng nổi bật:</strong></h2>
  <ul>
    <li>Tốc độ cao</li>
    <li>Lắp đặt nhanh chóng</li>
    <li>Phù hợp với cá nhân và hộ gia đình</li>
  </ul>
</body>
</html>

GHI NHỚ
- <h1>, <h2>: Tạo tiêu đề.
- <p>: Tạo đoạn văn.
- <strong>: Nhấn mạnh nội dung.
- <em>: In nghiêng nội dung.
- <ul> và <li>: Tạo danh sách không thứ tự.`
  },
  {
    id: "bai-9",
    number: 9,
    title: "Tạo danh sách, bảng",
    description: "Tạo bảng HTML và sinh bảng bằng Python.",
    content: `LUYỆN TẬP TRANG 56

Ví dụ tạo bảng HTML:

<table>
  <tr>
    <th>Họ tên</th>
    <th>Điểm Toán</th>
    <th>Điểm Vật lí</th>
    <th>Điểm Hóa học</th>
  </tr>
  <tr>
    <td>Nguyễn An</td>
    <td>9</td>
    <td>8</td>
    <td>9</td>
  </tr>
</table>

VẬN DỤNG: Sinh bảng HTML bằng Python

def generate_html_table(data):
    html = '<table>'
    for row in data:
        html += '<tr>'
        for value in row:
            html += f'<td>{value}</td>'
        html += '</tr>'
    html += '</table>'
    return html

GHI NHỚ
- <table>: Tạo bảng.
- <tr>: Tạo hàng.
- <th>: Tạo ô tiêu đề.
- <td>: Tạo ô dữ liệu.
- Có thể sử dụng CSS để định dạng đường viền và màu sắc.`
  },
  {
    id: "bai-10",
    number: 10,
    title: "Tạo liên kết",
    description: "Sử dụng thẻ a để liên kết giữa các trang web.",
    content: `LUYỆN TẬP

Ví dụ tạo trang giới thiệu bản thân:

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Giới thiệu bản thân</title>
</head>
<body>
  <h1>Giới thiệu bản thân</h1>
  <p>Xin chào! Tôi là Nguyễn Gia Hân.</p>

  <h2>Bạn cùng lớp</h2>
  <ul>
    <li><a href="https://www.facebook.com"
      target="_blank" rel="noopener noreferrer">
      Facebook của bạn 1
    </a></li>
    <li><a href="https://www.facebook.com"
      target="_blank" rel="noopener noreferrer">
      Facebook của bạn 2
    </a></li>
  </ul>
</body>
</html>

GHI NHỚ
- Thẻ <a> tạo liên kết.
- Thuộc tính href chỉ định địa chỉ đích.
- target="_blank" mở liên kết trong tab mới.`
  }
];

const STORAGE_KEY = "nhom2_12s_data_v1";

function getData() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    console.warn("Không đọc được dữ liệu đã lưu.", error);
  }

  const baseLessons = LESSONS.map(item => ({
    ...item,
    ...(saved.lessons?.[item.id] || {})
  }));

  const customLessons = saved.customLessons || [];

  return {
    members: MEMBERS.map(item => ({
      ...item,
      ...(saved.members?.[item.id] || {})
    })),
    lessons: [...baseLessons, ...customLessons.map(item => ({
      ...item,
      ...(saved.lessons?.[item.id] || {})
    }))]
  };
}

function saveItem(type, item) {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    saved = {};
  }

  if (!saved[type]) saved[type] = {};
  saved[type][item.id] = item;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function addCustomLesson(newLesson) {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    saved = {};
  }
  if (!saved.customLessons) saved.customLessons = [];
  saved.customLessons.push(newLesson);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
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

function renderHome() {
  const memberList = document.getElementById("member-list");
  const lessonList = document.getElementById("lesson-list");
  if (!memberList || !lessonList) return;

  memberList.innerHTML = "";
  lessonList.innerHTML = "";

  const data = getData();

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
    // Tránh gán sự kiện nhiều lần nếu render lại
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
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(addForm);
      const number = parseInt(formData.get("number")) || (data.lessons.length + 1);
      const title = String(formData.get("title") || "").trim();
      const description = String(formData.get("description") || "").trim();
      const content = String(formData.get("content") || "").trim();
      const id = `bai-custom-${Date.now()}`;

      if (!title) return;

      const newLesson = { id, number, title, description, content };
      addCustomLesson(newLesson);

      modalOverlay.style.display = "none";
      addForm.reset();
      renderHome();
    };
  }
}

function renderDetail() {
  const root = document.getElementById("detail-page");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const id = params.get("id");
  const data = getData();

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

  editor.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(editor);
    const updated = { ...item };

    for (const key of isMember
      ? ["name", "role", "bio", "contact"]
      : ["title", "description", "content"]) {
      updated[key] = String(formData.get(key) || "").trim();
    }

    saveItem(isMember ? "members" : "lessons", updated);

    renderDetail();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  root.replaceChildren(hero, panel);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderDetail();
});
