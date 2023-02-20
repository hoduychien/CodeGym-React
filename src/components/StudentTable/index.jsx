import React from "react";
import Student from "./Student";

const index = () => {
  return (
    <div>
      <h3>
        Bài 2: [Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong
        lớp học
      </h3>
      <table id="customers">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {Student.map((student, i) => (
            <tr key={i}>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
