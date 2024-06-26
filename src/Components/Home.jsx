import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?w=1060&t=st=1719302720~exp=1719303320~hmac=3af2f6507e0f7ee929f766f005929e5f4a61c83eb2b1d8b2963265cc5ef6b411')" }}>
      <div className="absolute top-1/4 left-10 text-left space-y-4">
        <h1 className="text-white text-4xl font-bold">Love The Planet<br></br> We Walk On</h1>
        <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600"> Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
