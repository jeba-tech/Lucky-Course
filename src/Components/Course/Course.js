import React from 'react';

const Course = (props) => {
      const { src, id, name, price } = props.course;
      return (
            <div>
                  <h4>{src}</h4>
                  <h4>Course id:{id}</h4>
                  <h3>Course Name:{name}</h3>
                  <h3>Course Price:{price} </h3>
            </div>
      );
};

export default Course;