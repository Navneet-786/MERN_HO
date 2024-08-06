import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p className="text-yellow-500 ">Biography</p>
          <h3 className="text-white">Who We Are</h3>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p>
          <p className="text-slate-300">We are all in 2024!</p>
          <p className="text-slate-400">
            We are working on a MERN STACK PROJECT.
          </p>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p className="text-slate-400">Lorem ipsum dolor sit amet!</p>
          <p className="text-slate-500">Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
