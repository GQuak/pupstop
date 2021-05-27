import React from "react";

function SearchResult() {
// will need to map over search results
    return(
        <div>
        <div class="row mb-4 yard">
    <div class="col-md-6">
        <h2>
            <a href="/yard/{{id}}">{{name}}</a>
        </h2>
        <p>{{description}}</p>
        <h4>Yard Features:</h4>
        <ul>
            {{#if water}}
            <li>Water Available</li>
            {{/if}}
            {{#if fence}}
            <li>Fenced in Yard</li>
            {{/if}}
            {{#if hasPets}}
            <li>Pets Live Here</li>
            {{/if}}
        </ul>
    </div>
    <div class="col-md-6">
        <h3 style="padding: 10px;">{{yard.user.fname}} {{user.lname}}'s Yard</h3>
        <ul style="padding: 10px; list-style-type: none;">
            <li>{{address}}</li>
            <li>{{city}}</li>
            <li>{{state}}</li>
            <li>{{zip}}</li>
        </ul>
    </div>
</div>
    </div>
    )
}

export default SearchResult;