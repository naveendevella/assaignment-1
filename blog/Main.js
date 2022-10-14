import React from "react";
import Sidebar from "./Sidebar";
import image from './usem.png'
import image2 from './usem2.png'
// import image1 from './image1.png';
// import image2 from './image2.png';
// import image3 from './image3.png';
// import image4 from './image4.png';
// import image5 from './image5.png';
// import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>React useMemo() Hook</u></h1>

      <tr><h2 align="left"><u>What is useMemo()?</u></h2>
          <h5>The React useMemo Hook returns a memoized value.

Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.</h5>
          
          <li>The useMemo and useCallback Hooks are similar </li>
          <li>The main difference is that useMemo returns a memoized value and useCallback returns a memoized function</li>
          
      </tr>

      <tr><h2 align="left"><u>performance</u></h2>
          <li>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</li>
          <li>In this example, we have an expensive function that runs on every render.</li>
          <li>When changing the count or adding a todo, you will notice a delay in execution.</li>
          
      </tr>

      <tr><h2 align="left"><u>Example :</u></h2>
          <p>
            <img src={image} alt="sac"></img>
          </p>
         
      </tr>

      <tr><h2 align="left"><u>Syntax</u></h2></tr><br/>
      <li>. The useMemo hook is used to improve performance in our React application.</li>
<br></br>
<br></br>
      <p> SYNTAX : const memoizedValue = useMemo(functionThatReturnsValue, arrayDepencies) </p>
     

     
      <tr>
   
         <li><u>MainExample:</u></li><br/></tr>
         <h2>
         Use useMemo
To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

We can wrap the expensive function call with useMemo.

The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count is changed and not when todo's are added.
         </h2>
        <tr>
         <p> <p>
            <img src={image2} alt="sac"></img>
          </p></p></tr>

       

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;