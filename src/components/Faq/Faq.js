import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className='fs-4 mt-3 text-center bg-info p-2'>This is Faq Section</h1>
            <div>

                <strong>
                    Q1: What is React and how its work?
                </strong>
                <p>Ans : React is a declarative,
                    efficient,
                    and flexible JavaScript library for building user interfaces.It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than we would with vanilla JavaScript. In React, we develop the applications by creating reusable components that we can think of as independent Lego blocks.</p>
            </div>

            <div>

                <strong>
                    Q2: Difference between props and state:
                </strong>
                <div>
                    <div>
                        <p><strong>Props</strong></p>
                        <ul>
                            <li>The Data is passed from one component to another.</li>
                            <li>It is Immutable (cannot be modified).</li>
                            <li>Props can be used with state and functional components.</li>
                            <li>Props are read-only.</li>
                        </ul>
                    </div>

                    <div>
                        <p><strong>STATE</strong></p>
                        <ul>
                            <li>The Data is passed within the component only.</li>
                            <li>It is Mutable ( can be modified).</li>
                            <li>State can be used only with the state components/class component (Before 16.0).</li>
                            <li>State is both read and write.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;