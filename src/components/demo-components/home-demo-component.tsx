import React from 'react';
import logo from '../../logo.svg';

interface IProps {
}

const HomeRouteDemoComponent: React.FC<IProps> = (props: IProps) => {

    return (
        <>
            <h2>Routing</h2>
            <p>React Router Dom is a library/dependency used with React to create a Single Page Application (SPA). When using a SPA, you never actually navigate to a new webpage when you navigate within the site. Rather, the entire view is replaced by new DOM elements, which ends up with a much quicker user experience.
            </p>
            <p>In React Router Dom, a "Link" tag is use to change the "route", a route is a predefined URL in your website's domain that renders a specific view. A view is essentially an arrangement of components to create an HTML page. New routes should be set up using "Route" tags, our Route tags are located in the App.tsx file in the src folder. Once there, you can see there that several routes defined inside of the "Routes" tag; note that the Routes tag must be define in the "BrowserRouter" tag, we happened to wrap our entire application in the BrowserRouter tag, you can see that in the index.tsx file.</p>
            <p>In this lab, let's explore how to create a router in React.</p>

            <div className="todo-container">

                <p>Your task will be to add a new route to the "profile" page, and also to link to the "profile" page in the navbar component. These files will be of interest to you:</p>

                <ul style={{textAlign: "left"}}>
                    <li>src/App.tsx</li>
                    <li>src/todo-components/profile-component.tsx</li>
                </ul>
            </div>
        </>
    );
}

export default HomeRouteDemoComponent;