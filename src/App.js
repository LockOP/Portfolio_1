import "./App.css";

function App() {
    
  return (
    <div className="absolute h-screen w-screen cubebg z-50 flex items-center justify-center overflow-clip top-0 left-0">
      <div className="cubecontainer">
        <p className="loadingtext">Loading...</p>
        <svg
          className="innercircle"
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
        >
          <path d="M320 160C320 248.366 248.366 320 160 320C71.6344 320 0 248.366 0 160C0 71.6344 71.6344 0 160 0C248.366 0 320 71.6344 320 160Z" />
        </svg>
        <svg
          className="outercircle"
          xmlns="http://www.w3.org/2000/svg"
          width="340"
          height="340"
          viewBox="0 0 340 340"
          fill="none"
        >
          <path d="M340 170C340 263.888 263.888 340 170 340C76.1116 340 0 263.888 0 170C0 76.1116 76.1116 0 170 0C263.888 0 340 76.1116 340 170Z" />
        </svg>
        {/* <div className="circleholder"></div> */}
        <div className="cube">
          <div className="top"></div>
          <div className="side1"></div>
          <div className="side2"></div>
          <div className="side3"></div>
          <div className="side4"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
