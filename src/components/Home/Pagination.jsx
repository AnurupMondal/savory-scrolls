import PropTypes from "prop-types";
import "../../Styles/Home/Pagination.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const handlePageClick = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pagination">
            <button className="page-btn" onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                ◀
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button className="page-btn" onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                ▶
            </button>
        </div>
    );
};


Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
