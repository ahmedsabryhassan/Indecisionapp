import React from 'react';
    
const Header = (props) => (
    <div className="header" >
        <div className="container" >
            <h1 className="header__title" >{props.title}</h1>
            <h2 className="header__subtitle" >{props.subtitle}</h2>
        </div>
    </div>
    );
// default values of the functional component props paramter
Header.defaultProps={
    title:"Indecision",
    subtitle:"Put your life in the hands of Coumputers",
}

export default Header;