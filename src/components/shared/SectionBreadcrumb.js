import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SectionBreadcrumb(props) {
    const Breadcrumbs = props.breadcrumbs.map((item, index) => {
        return (
            <Breadcrumb.Item>
                <Link to={props.links[index]}>
                    {item}
                </Link>
            </Breadcrumb.Item>
        )
    })

    return (
        <Breadcrumb>
            {Breadcrumbs}
        </Breadcrumb>
    );
}

export default SectionBreadcrumb;