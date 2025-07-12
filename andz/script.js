document.addEventListener("DOMContentLoaded", function() {
  // Xử lý domain email
  const emailInput = document.getElementById("email");
  const domainSelect = document.getElementById("domain");

  function updateEmail() {
    // Nếu người dùng chỉ nhập tên, tự động thêm domain
    let value = emailInput.value;
    // Nếu đã có @ thì chỉ lấy phần trước @
    if (value.includes("@")) value = value.split("@")[0];
    emailInput.value = value;
  }

  emailInput.addEventListener("input", updateEmail);
  domainSelect.addEventListener("change", updateEmail);

  // Kiểm tra form trước khi submit
  document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault(); // Ngăn form gửi mặc định để kiểm tra

    // Họ tên
    const hoten = document.getElementById("hoten").value.trim();
    if (hoten.length < 10) {
      alert("Bạn phải nhập đầy đủ họ tên");
      document.getElementById("hoten").focus();
      return false;
    }

    // Điện thoại
    const dienthoai = document.getElementById("dienthoai").value.trim();
    if (!/^\d{9,}$/.test(dienthoai)) {
      alert("Điện thoại nhập chưa đúng");
      document.getElementById("dienthoai").focus();
      return false;
    }

    // Kiểm tra email hợp lệ
    let email = emailInput.value.trim() + domainSelect.value;
    let domain = domainSelect.value;
    if (!(domain === "@gmail.com" || domain === "@yahoo.com" || domain === "@hotmail.com")) {
      alert("Vui lòng chọn đúng tên miền email!");
      domainSelect.focus();
      return false;
    }

    // Nếu mọi thứ hợp lệ
    alert("Cám ơn bạn đã liên hệ với chúng tôi");

    // 👉 Chuyển hướng đến Zalo
    window.location.href = "https://zalo.me/0876498328";

    return true;
  };

  // Nút nhập lại sẽ xóa hết form
  document.querySelector('button[type="reset"]').onclick = function() {
    setTimeout(() => {
      domainSelect.value = "@gmail.com";
      document.getElementById("nam").checked = true;
      emailInput.value = "";
    }, 0);
  };
});
