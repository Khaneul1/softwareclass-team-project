import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./takeMedicine.css";
import MedicationList from "./functions/medicationList";
import AlarmManager from "./functions/alarmManger";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";

const TakeMedicine = () => {
  const navigate = useNavigate();

  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const formattedDate = `${today.getMonth() + 1}. ${today.getDate()} (${
    week[today.getDay()]
  }) `;

  const [medications, setMedications] = useState(
    [
      {
        drug_name: "보령아스트릭스캡슐100밀리그람(아스피린)",
        comp_name: "(주)보령",
        type: "일반의약품",
        class_name: "기타의 순환계용약",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/154599017940000101",
        al_b: 1, // 아침
        al_l: 1, // 점심
        al_d: 1, // 저녁
      },
      {
        drug_name: "린피스정(아스피린)",
        comp_name: "(주)씨티씨바이오",
        type: "일반의약품",
        class_name: "기타의 순환계용약",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426438997500129",
        al_b: 0,
        al_l: 0,
        al_d: 1,
      },
      {
        drug_name: "텔미칸플러스정40/12.5밀리그램",
        comp_name: "제일약품(주)",
        type: "전문의약품",
        class_name: "혈압강하제",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426658237900107",
        al_b: 0,
        al_l: 0,
        al_d: 1,
      },
    ]
    // 더미 데이터 (실제 서버에서 뱉는값 넣어둠)
  );

  const [selectedTime, setSelectedTime] = useState("아침");

  const handelAddMedication = () => {
    navigate("/med/add");
  };

  const handelRemoveMedication = () => {
    // Edit으로 수정
  };

  const filteredMedications = medications.filter((medication) => {
    if (selectedTime === "아침" && medication.al_b === 1) return true;
    if (selectedTime === "점심" && medication.al_l === 1) return true;
    if (selectedTime === "저녁" && medication.al_d === 1) return true;
    return false;
  });

  return (
    <div className="take-medicine-page">
      <div className="today-take-medicine-list">
        <h2 className="today-date">
          {formattedDate} 오늘{" "}
          <KeyboardArrowDownIcon className="today-date-underArrow" />
        </h2>
        {["아침", "점심", "저녁"].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`selectedTime-btn 
                                ${selectedTime === time ? "active" : ""}`}>
            {time}
          </button>
        ))}
      </div>
      <div>
        <MedicationList medications={filteredMedications} />
      </div>
      <div className="add-medication-form">
        <div className="medication-btn-form">
          <button className="add-medication-btn" onClick={handelAddMedication}>
            <AddIcon />
          </button>
          <button
            className="edit-medication-btn"
            onClick={handelRemoveMedication}>
            <EditRoundedIcon />
          </button>
        </div>
      </div>
      <div>
        <AlarmManager />
      </div>
    </div>
  );
};

export default TakeMedicine;
