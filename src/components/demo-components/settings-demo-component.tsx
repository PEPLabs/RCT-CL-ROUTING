import React from 'react';

interface IProps {
}

const SettingsDemoComponent: React.FC<IProps> = (props: IProps)=>{

    return (
        <> 
            <h1>Settings Demo Component</h1>

            <h4>You can put any content you want here.</h4>
            <p>Imagine a settings page for a social media platform.</p>
            <br/>

            Username:<input type="text" placeholder='username' value="You Rightnow"></input>
            Email:<input type="text" placeholder='email' value="you.right.now@revature.net"></input>
            <br/>
            <br/>
            <br/>
            Current Password:<input type="password" placeholder='current password'></input>
            <br/>
            New Password:<input type="password" placeholder='new password'></input>
            Confirm New Password:<input type="password" placeholder='confirm new password'></input>
            <br/>
            <br/>
        </>
    );
}

export default SettingsDemoComponent;