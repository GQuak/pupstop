import React from "react";
import SearchResultCard from "../components/SearchResultCard";
import yards from "../yards.json";


function SearchResult() {
// will need to map over search results
    return(
        <SearchResultCard yards={yards} />
    )
}

export default SearchResult;