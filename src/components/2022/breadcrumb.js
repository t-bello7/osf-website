import React from "react";
import PropTypes from "prop-types";

function Breadcrumb(props) {
  return (
    <div>
      <section className="flex flex-wrap md:flex-row bg-army-green-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-20 sm:pb-6 md:pt-40 md:pb-32 lg:pt-60 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative text-white">
          <h1 className="font-anisette text-4xl lg:text-6xl leading-tight font-bold">{props.name}</h1>
        </div>
      </section>
    </div>
  );
}

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired
};

export default Breadcrumb;
