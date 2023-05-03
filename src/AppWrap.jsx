import React from "react";

export default function AppWrap() {

    return (
        <div>
            <Navbar>
                <Avartar 
                    image= 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                    name='Jun'
                    title='풀스택 개발자'
                    isNew={true}/>
            </Navbar>
        </div>
    );
}
function Navbar( {children, isNew }) {

    return (
        <header style={{ backgroundColor: 'yellow'}}>
            {children}
        </header>
        
    );
}

function Avartar(props) {

    return (
        <div className="avatar">
            <img className='photo' src={props.image} alt='avatar' sizes="200"/>
            {props.isNew && <span className='new'>New</span>}
        </div>
    );
}