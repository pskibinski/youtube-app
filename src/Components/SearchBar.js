import React, {useState} from "react";
import './SearchBar.css'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="searchBar">
                <label>Video Search</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </form>
    );
}

export default SearchBar;