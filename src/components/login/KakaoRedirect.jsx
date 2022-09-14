import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
      .get(`http://3.36.123.198/api/oauth/kakao?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.data.data.accessToken;
        const kakaoToken = res.data.data.kakaoToken;
        const refreshToken = res.headers["refresh-token"];
        const email = res.data.data.email;
        sessionStorage.setItem("authorization", ACCESS_TOKEN);
        sessionStorage.setItem("kakaoToken", kakaoToken);
        sessionStorage.setItem("Refresh_token", refreshToken);
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default KakaoRedirect;
