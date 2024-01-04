import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    // console.log('rendered');
    return (
      <div className='container-max py-16  text-center min-h-[80vh]'>
        <img
          src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201305/cookie-3_660_050913083828.jpg?VersionId=zkbUqSVkwYAkZ0zT4EOs.r5aLvOUicL7&size=690:388'
          alt=''
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'>Taste of India</h1>

          <p>
            A food ordering web application built with React.js ⚛ and
            Swiggy's API.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
