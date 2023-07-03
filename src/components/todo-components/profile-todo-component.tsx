import React from 'react';
import logo from '../../logo.svg';

/* YOU DON'T NEED TO MODIFY THIS FILE.

This just happens to be the component you'll reference for the "todo" section of this lab.
*/

interface IProps {
}

const ProfileTodoComponent: React.FC<IProps> = (props: IProps)=>{

    return (
        <> 
            <h1>Profile Todo Component</h1>

            <h4>You can put any content you want here.</h4>
            <p>Imagine a profile page for a social media platform.</p>
            <br/>

            <img style={{width: "10%"}} src={logo}  />
            <p>Name: John Jacob Jingleheimer Schmidt</p>
            <p>Favorite Language: Assembly</p>
            <p>Opinion: Groceries seem to go bad lightning fast when you buy them with your own money as an adult.</p>
        </>
    );
}

export default ProfileTodoComponent;