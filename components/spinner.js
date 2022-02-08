import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SpinnerLoading = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-coffee-100">Loading...</h1>
      <Loader
        type="Puff"
        color="#6b511e"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default SpinnerLoading;
