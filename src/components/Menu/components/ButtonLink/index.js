import React from 'react';


function ButtonLink(props){
    // props => { clasName = "o q alguém passar", href:"/"}
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;