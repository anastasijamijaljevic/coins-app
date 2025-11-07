import { PaginationWrapper, PageButton } from "./Pagination.styles";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let p = startPage; p <= endPage; p++) {
    pages.push(p);
  }

  return (
    <PaginationWrapper>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        {"<<"}
      </PageButton>
      <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </PageButton>

      {pages.map((p) => (
        <PageButton key={p} active={p === currentPage} onClick={() => onPageChange(p)}>
          {p}
        </PageButton>
      ))}

      <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </PageButton>
      <PageButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </PageButton>
    </PaginationWrapper>
  );
};
