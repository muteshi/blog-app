import React, { useContext, useEffect, useRef } from "react";
import SearchContext from "../../context/search-context";
import Backdrop from "../ui/backdrop/backdrop";
import Loader from "../ui/Loader";
import Modal from "../ui/modal/modal";
import SearchResults from "./search-results";

const HeaderSearch: React.FC = () => {
  const searchTextInputeRef = useRef<HTMLInputElement>(null);
  const {
    searching,
    showForm,
    searchResults,
    showModal,
    showBackdrop,
    showModalHandler,
    onSubmit,
  } = useContext(SearchContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let searchText = searchTextInputeRef.current!.value;
    if (searchText.trim().length === 0) return;
    onSubmit(searchText);
    searchTextInputeRef.current!.value = "";
  };

  return (
    <div className="header-searchbar">
      <a
        // href="#search-header"
        className="header-search-form"
        onClick={() => showModalHandler()}
      >
        <i className="fas fa-search search-button"></i>
      </a>

      <form
        id="search-header"
        onSubmit={submitHandler}
        name="search-header"
        className="mfp-hide search-form-result"
      >
        <Backdrop show={showBackdrop} clicked={() => showModalHandler()} />
        <Modal show={showModal}>
          <div className="search-form position-relative">
            {showForm && (
              <>
                <input
                  type="text"
                  required
                  name="search"
                  className="search-input border-bottom text-dark"
                  placeholder="Enter your keywords..."
                  ref={searchTextInputeRef}
                />
                <button
                  type="submit"
                  className="fas fa-search close-search search-button text-dark"
                />
              </>
            )}
            {!searching && <SearchResults results={searchResults} />}
            {searching && <Loader />}
          </div>
        </Modal>
      </form>
    </div>
  );
};
export default HeaderSearch;
