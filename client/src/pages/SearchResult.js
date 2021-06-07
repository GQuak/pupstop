import React from "react";
import YardCard from "../components/YardCard";
import yards from "../yards.json";


function SearchResult() {
// will need to map over search results
    return(
        <YardCard yards={yards} />
    )
}

export default SearchResult;