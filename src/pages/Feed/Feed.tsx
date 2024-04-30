import React, { useState } from "react";

import * as S from "./feed.styled";

import FeedSection from "../../sections/Feed/Feed";
import Searchbar from "../../components/Searchbar/Searchbar";
import Search from "../../sections/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../components/Logo/Logo";
import Results from "../../sections/Results/Results";

interface Salon {
  id: number;
  title: string;
}

const Feed: React.FC<S.FeedProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Salon[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchResults([{id: 1, title: "Lirasalon"}]) // quero fazer mockado aqui apenas para teste

    // if (searchQuery) {
    //   fetch(/* Your API endpoint */ /*searchQuery */)
    //     .then(response => response.json())
    //     .then(data => {
    //       setSearchResults(data as Salon[]);
    //     })
    //     .catch(error => {
    //       console.error("Error fetching search results:", error);
    //     });
    // } else {
    //   console.warn("Search query is empty. Please enter a search term.");
    // }
    console.log(searchQuery);
  };

  return (
    <S.Feed id="feed">
      <Sidebar color="var(--color-violet-300)" tipoperfil="B2B"  /> {/*tipo perfil chumbado por enquanto */}

      <S.Container direction="column">
        <S.Header>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>

          <S.PrimaryButton width="180px">Entrar</S.PrimaryButton>
        </S.Header>

        <>
          <Searchbar
            placeholderText="Salão para cabelos cacheados..."
            onChange={handleSearchChange}
            onClick={handleSearchClick}
          />
        </>

        {searchResults.length > 0 ? (
          <Results searchResults={searchResults} />
        ) : searchQuery ? (
          <Search searchQuery={searchQuery} />
        ) : (
          <FeedSection />
        )}
      </S.Container>
    </S.Feed>
  );
};

export default Feed;
