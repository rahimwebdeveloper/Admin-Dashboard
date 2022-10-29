import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function App() {
  const activeMenu = true ;
  return (
    <div>
      <div className="flex relative dark:bg-main-dark">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="setting" positions="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: "blue", borderRadius: "50%"}} >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        { activeMenu ? (
          <div>
            sidebar
          </div>
        ) : ( 
          <div>
            sidebar w-0
          </div>
        )

        }
      </div>
    </div>
  );
}

export default App;
