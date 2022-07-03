import React from "react";

export default function Pagination({
  page,
  totalPages,
  onRightClick,
  onLeftClick,
}) {
  return (
    <div
      style={{ display: "flex", padding: "20px", justifyContent: "flex-end" }}
    >
      <button
        style={{
          marginRight: "10px",
          background: "transparent",
          borderRadius: "60px",
          cursor: "pointer",
        }}
        onClick={onLeftClick}
      >
        ⬅
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button
        style={{
          marginLeft: "10px",
          background: "transparent",
          borderRadius: "60px",
          cursor: "pointer",
        }}
        onClick={onRightClick}
      >
        ➡
      </button>
    </div>
  );
}
