import React from "react";
import '../Tags/tags.css';

function Tags({ data }) {
    return (
    <div className="tags-container">
        <ul>
            {data.map((item) => (
                item.tags.map((tags) => (
                    <li key={tags.id} className="tags-item">{tags}</li>
                ))
            ))}
        </ul>
    </div>
    );
};

export default Tags;
