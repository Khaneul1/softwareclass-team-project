import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRemoveMedicine = () => {
    navigate("/med/remove");
  };

  const handleGetMedicine = () => {
    navigate("/med/mypage");
  };

  const handleClickMyProfile = () => {
    navigate("/myPage");
  };

  return (
    <>
      <div>
        {true && (
          <div>
            <p>{undefined}</p>
            <br />
            <button onClick={handleClickMyProfile}>마이페이지</button>
            <br />
            <button onClick={handleRemoveMedicine}>
              저장된 의약품 삭제하기
            </button>
            <br />
            <button onClick={handleGetMedicine}>등록된 의약품 조회하기</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
