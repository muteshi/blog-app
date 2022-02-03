import { useContext, useRef } from "react";
import SearchContext from "../../context/search-context";
import Backdrop from "../ui/backdrop/backdrop";
import Modal from "../ui/modal/modal";
import SearchResults from "./search-results";

const SearchBar: React.FC = () => {
  const searchTextInputeRef = useRef<HTMLInputElement>(null);

  const {
    onSubmit,
    showModalHandler,
    searching,
    searchResults,
    showBackdrop,
    showModal,
  } = useContext(SearchContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let searchText = searchTextInputeRef.current!.value;
    if (searchText.trim().length === 0) return;
    onSubmit(searchText);
    searchTextInputeRef.current!.value = "";
  };

  return (
    <div className="d-inline-block w-100 margin-45px-bottom sm-margin-25px-bottom">
      <Backdrop show={showBackdrop} clicked={() => showModalHandler()} />
      <form onSubmit={submitHandler} className="position-relative">
        <div className="position-relative">
          <input
            name="text"
            id="text"
            data-email="required"
            required
            ref={searchTextInputeRef}
            type="text"
            placeholder="Enter your keywords..."
            className="bg-transparent padding-40px-right text-small mb-0 border-color-extra-light-gray medium-input float-start"
          />
          <button
            type="submit"
            onClick={showModalHandler}
            className="bg-transparent  btn position-absolute right-0 top-1 search-button"
          >
            <i className="fas fa-search ms-0"></i>
          </button>
        </div>
        <Modal show={showModal}>
          {!searching && <SearchResults results={searchResults} />}
        </Modal>
      </form>
    </div>
  );
};

export default SearchBar;
