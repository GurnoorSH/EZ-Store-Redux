import React from "react";
import RingLoader from "react-spinners/RingLoader";
import Product from "../components/Product";
import { useState , useEffect } from "react";

const Home = () => {
  const ApiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch(ApiUrl);
      const data = await res.json();
      setPosts(data);
      console.log( "posts",posts)
      console.log("try block")
    } catch (error) {
      console.log("Error in api");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>
    <div>
        {
            loading ? (  <div className=" justify-center flex my-auto items-center"> 
               <RingLoader  color="#a01eff" />
            </div>          
          ) : posts.length > 0 ? (<div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]
          ">
                { 
                posts && posts.map((post) => (<Product key={post.id} post={post}/>))}
            </div>) : <div className="flex justify-center items-center"> 
                <p>No Products Api Problem</p> </div>
        }
    </div>
  </div>;
};

export default Home;
