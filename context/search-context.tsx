import React, { useState } from "react";
import { DataInterface, PostInterface } from "../models/posts.model";
import { getSearchResults } from "../services/post-service";

type SearchContextObj = {
  searching: boolean;
  showForm: boolean;
  showModal: boolean;
  showBackdrop: boolean;
  searchResults: PostInterface[];
  onSubmit: (searchText: string) => void;
  showModalHandler: () => void;
};
const SearchContext = React.createContext<SearchContextObj>({
  searching: false,
  showForm: true,
  showModal: false,
  showBackdrop: false,
  searchResults: [],
  onSubmit: (searchText: string) => {},
  showModalHandler: () => {},
});

export const SearchContextProvider: React.FC = ({ children }) => {
  const [searching, setSearching] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<PostInterface[]>([]);

  const searchHandler = async (searchText: string) => {
    setShowForm(false);
    setSearching(true);
    const { data: searchData }: DataInterface = await getSearchResults(
      searchText
    );

    setSearchResults(searchData.results);

    setSearching(false);
  };

  const showModalHandler = () => {
    setShowModal(!showModal);
    setShowBackdrop(!showBackdrop);
    setSearchResults([]);
    setShowForm(true);
  };

  const contextValue: SearchContextObj = {
    searching,
    showForm,
    showModal,
    showBackdrop,
    searchResults,
    onSubmit: searchHandler,
    showModalHandler,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
