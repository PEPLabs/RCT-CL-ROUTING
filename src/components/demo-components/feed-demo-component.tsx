import React from 'react';
import logo from '../../logo.svg';

interface IProps {
}

const FeedDemoComponent: React.FC<IProps> = (props: IProps) => {

    return (
        <>
            <h1>Feed Demo Component</h1>

            <h4>You can put any content you want here.</h4>
            <p>Imagine a feed page for a social media platform.</p>

            <div className="post-container">
                <img style={{width: "10%"}} src={logo}  />
                <p>Post: blah blah blah ONE</p>
                <p>Comment: blah blah blah</p>
            </div>

            <div className="post-container">
                <img style={{width: "10%"}} src={logo}  />
                <p>Post: blah blah blah TWO</p>
                <p>Comment: blah blah blah</p>
            </div>
        </>
    );
}

export default FeedDemoComponent;