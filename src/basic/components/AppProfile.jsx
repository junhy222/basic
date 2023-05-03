import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Profile from './basic/components/Profile'
import Avartar from './basic/components/Avatar';

function AppProfile() {
  const handleClick = (event)=>{
    console.log(event);
    alert('버튼이 클릭');
  }

  return (
    <Fragment>
      <button onClick={handleClick}>버튼</button>
      
      <Profile 
        image= 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name='Jun'
        title='풀스택 개발자'
        isNew={true}/>
      <Profile 
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='시네'
        title='프론트 개발자'/>
      <Profile 
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='곰돌이'
        title='주니어'/>
    </Fragment>
  );
}

export default AppProfile;
