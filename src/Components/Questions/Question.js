import React from 'react';
import '../Header/Courses.css'

const Question = () => {
      return (
            <div className='question'>
                  <p>1.How React Works?</p>
                  <p>Ans: Declarative paradigm is used in react.Commit state changes one after the other  is not done ny the react.Instead,react use virtual DOM.React allows developers to make web app which can change data without reloading it.React utilizes virtual DOM to improve its exhibition.React specializes in creating UI components.</p>
                  <p>2.What is the difference between props Vs states?</p>
                  <p>Ans:Props pass the data from one component to another. The state cannot be passed to other components.State is used to store the data your current page needs in your controller-view.Props used to pass data and event handlers down to your child components.Props are immutable.State is mutable.</p>
                  <p>3.How useState works?</p>
                  <p>Ans:UseState pass the initial state to functional components that has state variables in it.After that, it returns a variable with the current state value.Then, another function to update this value.UseState is a Hook (function).UseState Hook allows us to track state in a function component.</p>

            </div>
      );
};

export default Question;