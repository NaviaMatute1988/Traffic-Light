import { useEffect } from "react";
import { Light } from "./Light";
import { useState } from "react";
import { Button } from "./Button";

export default function App() {
  const [activeLight, setActiveLight] = useState("red");

  // useEffect(() => {
    
  //   const interval = setInterval(() => {
  //     switch (activeLight) {
  //       case "red":
  //         setActiveLight("yellow");
  //         break;
  //       case "yellow":
  //         setActiveLight("green");
  //         break;
  //       case "green":
  //         setActiveLight("red");
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // });

const startButton = () => {
  setInterval(() => {
     switch (activeLight) {
        case "red":
          setActiveLight("yellow");
          break;
        case "yellow":
          setActiveLight("green");
          break;
        case "green":
          setActiveLight("red");
      }
    }, 3000);

   // return () => clearInterval(interval);
  //});
 // })
}


  return (
    <>
    
      <div className="pole"></div>
      <div className="trafficLight">
        <Light color="red" opacity={activeLight === "red" ? 1 : 0.4}></Light>
        <Light color="yellow" opacity={activeLight === "yellow" ? 1 : 0.4}></Light>
        <Light color="green" opacity={activeLight === "green" ? 1 : 0.4}></Light>
      </div>
      <h1 style={{ margin: "auto", width: "fit-content" }}>{activeLight}</h1>
   <Button >

   </Button>
    </>
  );
}
