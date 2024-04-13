import React, { useState } from "react";
import videoBg from "../assets/videoBg.mp4";
import "./authentication.css";

function Authentication({ setPage }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "rishabhsaini1098@gmail.com" && password === "rishabh") {
      setPage("home");
    }
  };

  return (
    <>
      <video src={videoBg} autoPlay loop muted></video>
      <div
        class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 "
        tabindex="-1"
        role="dialog"
        id="modalSignin"
        style={{
          height: "100vh",
          backgroundImage: "url()",
        }}
      >
        <div class="modal-dialog " role="document" style={{}}>
          <div
            class="modal-content shadow rounded-0"
            style={{
              backgroundColor: "rgba(0,0,57, 0.9)",
              border: "2px solid #00FF00",
            }}
          >
            <div class="modal-header p-5 pb-4 border-bottom-0">
              <h1 class="fw-bold mb-0 fs-2" style={{ color: "#00FF00" }}>
                Admin Login
              </h1>
            </div>

            <div class="modal-body p-5 pt-0">
              <form class="" onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                  <input
                    onpaste="return false;"
                    ondrop="return false;"
                    autocomplete="off"
                    style={{
                      border: "2px solid #00FF00",
                      background: "black",
                      color: "#00FF00",
                      fontSize: "20px",
                    }}
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder=""
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
                <div class="form-floating mb-3">
                  <input
                    style={{
                      border: "2px solid #00FF00",
                      background: "black",
                      color: "#00FF00",
                      fontSize: "20px",
                    }}
                    type="password"
                    class="form-control rounded-0"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-0 bg-black signin"
                  style={{ color: "#00FF00" }}
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
