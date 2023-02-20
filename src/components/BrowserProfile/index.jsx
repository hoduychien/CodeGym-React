import React from "react";

export default function index() {
  return (
    <div>
      <h3>
        Bài 1: [Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang
        sử dụng
      </h3>
      <h4>{navigator.userAgent}</h4>
    </div>
  );
}
