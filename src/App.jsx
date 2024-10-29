import { openModal, URLModal } from "react-url-modal";
import React from "react";

import "./App.css";

function App() {
  return (
    <div>
      <URLModal
        modals={{
          customModal: React.lazy(() => import("./modals/EampleModal")),
        }}
        Wrapper={({ onClose, children }) => (
          <div
            className="modal-wrapper"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            {children}
          </div>
        )}
      />
      <h1>Hello World</h1>
      <button
        onClick={() =>
          openModal({ name: "customModal", params: { userId: "123" } })
        }
      >
        Open Custom Modal
      </button>
    </div>
  );
}

export default App;
