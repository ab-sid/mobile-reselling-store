import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl font-bold text-center'>Here is some Question and Answer</h1>
            <div className='my-8'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>The Four Kinds of React State to Manage
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:</p>
                        <ul>
                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>
                        </ul>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                            Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                            If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;