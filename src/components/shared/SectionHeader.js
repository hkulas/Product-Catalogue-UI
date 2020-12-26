import React from 'react';

function SectionHeader(props) {
    return (
        <div className="row">
            <div className="col-12 ml-4 mt-4">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default SectionHeader;