import React from "react";
import {
  PaginationSection,
  LeftButton,
  RightButton,
} from "./styles/Pagination.styled";

export default function Pagination({
  page,
  totalPages,
  onRightClick,
  onLeftClick,
}) {
  return (
    <PaginationSection>
      <LeftButton onClick={onLeftClick}>⬅</LeftButton>
      <div>
        {page} of {totalPages}
      </div>
      <RightButton onClick={onRightClick}>➡</RightButton>
    </PaginationSection>
  );
}
