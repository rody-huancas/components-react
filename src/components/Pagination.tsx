import classNames from 'classnames';

type PaginationProps = {
  currentPage  : number;
  totalPages   : number;
  onPageChange : (page: number) => void;
  className   ?: string;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={classNames(
            'px-4 py-2 mx-1 border rounded-md',
            i === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 hover:bg-blue-100'
          )}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={classNames('flex justify-center items-center space-x-2', className)}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 mx-1 border rounded-md bg-white text-blue-500 hover:bg-blue-100"
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 mx-1 border rounded-md bg-white text-blue-500 hover:bg-blue-100"
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
