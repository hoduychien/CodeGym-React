import React from "react";
import "./profileCard.css";

export default function ProfileCard() {
  return (
    <>
      <h3>
        Bài 3: [Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)
      </h3>
      <div className="container">
        <div className="card">
          <div className="card--header">
            <img
              className="avatar"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="avatar"
            />
          </div>

          <div className="card--body">
            <p className="text-header">Ruma Khan</p>
            <p className="text-sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="btn third">FOLLOW</button>
          </div>
        </div>
      </div>
    </>
  );
}
