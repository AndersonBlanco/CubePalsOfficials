import "./App.css";
import fade from "./App.css";

//import * as AsyncStorage from "@react-native-async-storage/async-storage";
//import SvgComp from "./SvgBricks"

import React, { createRef } from "react";
import {useState, useEffect, useRef} from "react";

import {Slide} from "react-slideshow-image";
import {ScrollView} from "@react-ui-org/react-ui"; 
import imgTest from "./Imgs/webCover.png";

import Modal from "react-modal";
import {motion} from "framer-motion"; 
import introGif1 from "./Gifs/gif1.gif";
import introGif2 from "./Gifs/gif2.gif";

import cube1 from "./Imgs/cube1.png";
import cube2 from "./Imgs/cube2.png";
import cube3 from "./Imgs/cube3.png";
import cube4 from "./Imgs/cube4.png";
import cube5 from "./Imgs/cube5.png";
import discordIcon from "../src/Imgs/discord.png";
import openSeaIcon from "./Imgs/openSeaIcon.png"; 
import ImgTitle from "./Imgs/titleHeader.png";
import ImgBackground from "./Imgs/background.png";
import BackgroundPart1 from "./Imgs/BackgroundPart1.png";
import BackgroundPart2 from "./Imgs/BackgroundPart2.png";
 import BackgroundGradient1 from "./Imgs/backgroundGradient1.png"; 
//import ScrollAnimation from "react-animate-on-scroll";

import cubeS1 from "./Imgs/cubeSlide1.png";
import cubeS2 from "./Imgs/cubeSlide2.png";
import cubeS3 from "./Imgs/cubeSlide3.png";
import cubeS4 from "./Imgs/cubeSlide4.png";
import cubeS5 from "./Imgs/cubeSlide5.png";
import cubeS6 from "./Imgs/cubeS6.png";
import cubeS7 from "./Imgs/cubeS7.png";
import cubeS8 from "./Imgs/cubeS8.png";
import cubeS9 from "./Imgs/cubeS9.png";
import cubeS10 from "./Imgs/cubeS10.png";
import twitterIcon from "./Imgs/twitterIcon.png"; 

//import {Switch, Route, Redirect } from "react-route-dom";
//import {HashLink, NavHashLink } from "react-router-hash-link";
//import { setTarget } from "framer-motion/types/render/utils/setters";



//import { ImageBackground } from "react-native";

// const pixel = require("http://fonts.cdnfonts.com/css/sf-pixelate");

//import { View, Image, StyleSheet } from 'react-native';

function App() {

  const ulShowRef = React.useRef();

  const imgShow = [
    {
      url: cubeS1,
      caption: "Cube1"
    },
    {
      url: cubeS2,
      caption: "Cube2"
    },
    {
      url: cubeS3,
      caption: "Cube3"
    },
    {
      url: cubeS4,
      caption: "Cube4"
    },
    {
      url: cubeS5,
      caption: "Cube5"
    },
  ];


  const imgShowV2 = [ 
    {
      url: cubeS6,
      caption: "Cube5"
    },  {
      url: cubeS7,
      caption: "Cube5"
    },  {
      url: cubeS8,
      caption: "Cube5"
    },  {
      url: cubeS9,
      caption: "Cube5"
    },  {
      url: cubeS10,
      caption: "Cube5"
    },
  ]

  const BackedUpMarketContent = () =>{
    return(
      <div
      style={{
        display: "block",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto ",
          gridGap: "5vh"
        }}
      >
        <h2
          style={{
            fontSize: "5.5vh",
            color: "white",
            textAlign: "left",
            alignSelf: "left",
            textShadow: "0vh 0vh 2vh black", 
            padding: "20vh"
          }}
        >
          {" "}
          Collect different styles, explore, and stay cool{" "}
        </h2>

        <Hub
          title="Click to see more"
          imgSrc={introGif1}
          description={"Collect different styles, explore, and stay cool"}
        />
      </div>

      {"\n"}

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto ",
          gridGap: "5vh"
        }}
      >
        <h2
          style={{
            fontSize: "5.5vh",
            color: "white",
            textAlign: "left",
            alignSelf: "left",
            textShadow: "0vh 0vh 1vh black", 
           
            padding: "20vh"
          }}
        >
          {" "}
          Trade, exchange, sell, and enjoy{" "}
        </h2>
        <Hub title="Click to see more" imgSrc={introGif1} />
      </div>
    </div>
    )
  }; 


const contRef = React.useRef(); 


  const headerRef = useRef(null);
const sect2Ref = useRef(null);
const sect3Ref = useRef(null);
const faqRef = useRef(null); 
const creditsRef = useRef(); 

  const goTo = (ref) =>{
     window.scrollTo({
       top: ref.current.offsetTop,
       behavior: "smooth"
     })
  }

  const height = window.innerHeight,
    width = window.innerWidth;

  const header = document.getElementById("header");

  const h = height.toString(),
    w = width.toString();

 // const sect2 = document.getElementById("sect2"),
  // sect3 = document.getElementById("sect3");

  const body = document.body;
  //body.style.height = height + "px";
  // body.style.width = width + "px";

  function Dimensions(dimension, percentage) {
    return dimension * (percentage / 100);
  }

  const Hub = ({ title, imgSrc, description, backC }) => {
    return (
      <a 
      style = {{
        textDecoration: "none",
        color: "black",
        cursor: "pointer"
      }}
      href = "https://opensea.io/collection/cube-pals"> 

      <div
     // href = "https://opensea.io/collection/cube-pals"
  
        id="hubContainer"
        style={{
          backgroundColor: "white",
          borderRadius: "5vh",
          padding: "5vh",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
          textAlign: "center",
          margin: "5vh",
          cursor: "pointer"

        }}
      >


        <h2
          id="hubTitle"
          style={{
            fontSize: "5vh",
            alignSelf: "center"
          }}
        >
          {title}
        </h2>

        <img
          id="imgDisplay"
          src={imgSrc}
          style={{
            height: "25vh",
            borderRadius: "2vh"
          }}
        />

      </div>
      </a>
    );
  };

  const Menu = () => {
    return (
      <nav className="menuNav">
        <ul className="menuNav_ul">
          <li>FQA</li>
          <li>Check us out in Open Sea</li>
        </ul>
      </nav>
    );
  };

  const SMenu = () =>{
    let styles = {
      main:{
      cursor: "pointer",
      
      display: "inline",
      borderRight: ".4vh solid white",
      paddingRight: "2vh", 
      paddingLeft: "2vh"
      },

      mainT:{
        cursor: "pointer",
      
        display: "inline",
        borderRight: ".4vh solid white",
        paddingRight: "2vh", 
        paddingLeft: "2vh",
        textShadow: "0vh 1vh 1vh black"
      }, 

      credits:{
        cursor: "pointer",
        margin: "1vh",
        display: "inline",

      },

    }

    



    return(

      <ul
      style = {{
        listStyle: "none",
        fontSize: "160%",
        gridColumnStart: 1,
        gridColumnEnd: 5,
          flexDirection: "row",
          display: "inline",
          marginTop: "-2vh", 
          marginBottom: "10vh",
          flexDirection: "row",
          display: "inline",
        
         
          
      }}>
        <li className = "item" style = {styles.main} onClick = {() => goTo(sect2Ref)} >Market</li>

        <li className = "item" style = {styles.main} onClick = {() => goTo(sect3Ref)}>TimeLine</li>
        <li className = "item" style = {styles.main} onClick = {() => goTo(faqRef)} >FAQ</li>
         <li className = "item" style = {styles.credits} onClick = {() => goTo(creditsRef)}>Credits</li>
         <li className = "item" style = {{flexDirection: "row", display: "inline"}}  onClick = {() =>{}}><a style = {{textAlign: "center", alignItems: "center", justifyContent: "center", marginLeft: "4vh"}} href = "https://discord.gg/Pdypqbg2fF"><img src = {discordIcon} style = {{height: "4vh", width: "4vh" }} /> </a></li>
         <li className = "item" style = {{flexDirection: "row", display: "inline"}}  onClick = {() =>{}}><a style = {{textAlign: "center", alignItems: "center", justifyContent: "center", margin: "2vh" }} href = "https://opensea.io/collection/cubepals-1"><img src = {openSeaIcon} style = {{height: "4vh", width: "4vh" }} /></a></li>
        <li className = "item" style={{flexDirection: "row", display: "inline"}}> <a href = "https://twitter.com/PalsNf"><img src = {twitterIcon} style = {{height: "4vh", width: "4vh"}} /></a></li>
      </ul>
  
    )

  }


  //Animations:
  const [disp, setDisp] = useState("none"); 
  const [toggle, setToggle] = useState(false); 

 const [v1, setV1] = useState(false),
       [v2, setV2] = useState(false),
       [v3, setV3] = useState(false),
       [v4, setV4] = useState(false),
       [v5, setV5] = useState(false); 
    
const [open, SetOpen] = useState(false); 

const [paddingV1, setPaddingV1] = useState(false);

  return (
    <div className="App" ref = {contRef} id = "cont">

      <div className="header" id="header" ref = {headerRef}
      style = {{
        fontFamily: "'SF Pixelate', sans-serif",

      }}>


  <SMenu/>

          <img
            src={cube4}
            style={{
              height: "15vh",
              transform: "rotateZ(-25deg) skew(10deg)",
              gridColumnStart: 1,
              gridCOlumnEnd: 1,
              gridRowStart: 3,
              gridRowEnd: 3,
              borderRadius: "10%",
              boxShadow: "0vh 0vh 5vh 1vh black"
            }}
          />

          <img
            src={cube2}
            style={{
              height: "15vh",
              alignSelf: "10px 10px",
              borderRadius: "10%",
              transformOrigin: "center",
              gridColumnStart: 1,
              gridCOlumnEnd: 1,
              gridRowStart: 2,
              gridRowEnd: 2,
              transform: "rotateZ(20deg)",
              boxShadow: "0vh 0vh 5vh 1vh black"
            }}
          />

          <img
            src={ImgTitle}
            style={{
              alignSelf: "center",
              height: "25vh",
              marginBottom: "50%",
              gridColumnStart: 2,
              gridCOlumnEnd: 2,
              transform: "rotateZ(0deg) skew(-14deg)",
              gridRowStart: 3,
              gridRowEnd: 3
            }}
          />

          <h3 className="headerTextTitle"
          style = {{
        fontFamily: "'SF Pixelate', sans-serif",

          }}>Pinky promise?</h3>

          <img
            src={cube3}
            style={{
              transform: "rotateY(180deg) rotateZ(15deg)",
              height: "20vh",
              gridColumnStart: 3,
              gridCOlumnEnd: 3,
              gridRowStart: 2,
              gridRowEnd: 2,
              boxShadow: "0vh 0vh 5vh 1vh black",
              borderRadius: "10%"
            }}
          />

  

      </div>

      <div
      ref = {sect2Ref}
        className="sect2"
        id="sect2"
        style={{
          height: "fit-content",
        fontFamily: "'SF Pixelate', sans-serif",
        padding: "2vh", 
        fontSize: "4.3vh",
        color: "white",
        paddingBottom: "2vh", 

        }}
      >
        <h1
          style={{
            fontSize: "7vh",
            color: "white"
          }}
        >
          Market
        </h1>


       
   <div>

   <h2
style = {{
  margin: "5vh",
  textShadow: "0vh 0vh 2vh black"
}}>Collect different styles, explore, and stay cool</h2> 

     <ul
     ref = {ulShowRef} 
     style = {{
      display: "inline-flex",

      width: "fit-content",
      overflowY: "-moz-hidden-unscrollable",
      margin: "1vh"
     }}>
     {
     imgShow.map((image, idx) =>{
       return(
<motion.li


style = {{
  display: "inline-flex",
}}> 
        <motion.div

        style = {{
   
          display: "inline-flex", 
          padding: "2vh", 
          paddingLeft: "4vh", 
          backgroundColor: "white",
          margin: "2.5vh",
          height: "fit-content",
          width: "fit-content", 
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2vh",
          boxShadow: "0vh 0vh 2vh black"

        }}>
                
         <motion.img 
         src = {image.url} style = {{
           height: "20vh", width: "20vh", margin: "1vh",
           
           transform: "skew(0deg)"
            }} /> 

            <span>{idx}</span>

       </motion.div>
</motion.li>

       )
     })
   }


       </ul>



       <ul
     ref = {ulShowRef} 
     style = {{
      display: "inline-flex",

      width: "fit-content",
      overflowY: "-moz-hidden-unscrollable",
      margin: "1vh"
     }}>
     {
     imgShowV2.map((image, idx) =>{
       return(
<motion.li


style = {{
  display: "inline-flex",
}}> 
        <motion.div

        style = {{
   
          display: "inline-flex", 
          padding: "2vh", 
          paddingLeft: "4vh", 
          backgroundColor: "white",
          margin: "2.5vh",
          height: "fit-content",
          width: "fit-content", 
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2vh",
          boxShadow: "0vh 0vh 2vh black"

        }}>
                
         <motion.img 
         src = {image.url} style = {{
           height: "20vh", width: "20vh", margin: "1vh",
           transform: "skew(0deg)"
            }} /> 

            <span>{idx}</span>

       </motion.div>
</motion.li>

       )
     })
   }


       </ul>


<h2
style = {{
  margin: "5vh",
  textShadow: "0vh 0vh 2vh black"
}}>Trade, exchange, sell, and enjoy</h2>
   </div>

       



      </div>

      <div
      ref = {sect3Ref}
        className="sect3"
        id="sect3"
        onScroll={() => alert("wGEFGVQWAERFGYUH")}
      >





<div
style = {{
  
}}>


</div>
















<div
style = {{
  
  flex: 1,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto auto auto auto",
}}>



  

<h3
            style={{
              marginTop: "10vh", 
              fontSize: "5vh",
              color: "white",
              gridRowStart: 1,
              gridRowEnd: 1, 
              gridColumnStart: 2,
              gridCOlumnEnd: 2,

            }}
          >
            ~Road Map~
          </h3>



          <div
        
            style={{
              fontSize: "2.5vh",
              color: "white",

              padding: "1vh",
              paddingRight: "10vh",
              paddingLeft: "10vh",
              
              gridColumnStart: 2,
              gridClumnEnd: 2,
              gridRowStart: 2,
              gridRowEnd: 5,
              height: "fit-content", 
              marginRight: "25vh",
               marginLeft: "25vh", 

            }}
          >




            <p
            id = "percZ"
            onMouseEnter = {() =>{
             const self = document.getElementById("rMP1");

            //setPaddingV1(!paddingV1); 
            }}

            
            onMouseOut = {() =>{
              // setPaddingV1(!paddingV1)
            }}
          
            style = {styles.rMPP}

              id = "rMP1"
              className="rMP1"
              style={{
                cursor: "crosshair", 
                marginLeft: "5vh", 
                margin: "5vh", 
                padding: "1vh",
                backgroundColor: "white", 
                borderBottom: "1vh solid black",
                gridColumnStart: 2,
                gridColumnEnd: 2,
                gridRowStart: 2,
                gridRowEnd: 2,
                color: "black",
               textAlign: "center",
            alignItems: "center",
         justifyContent: "center",
         borderRadius: "2vh",
         boxShadow: "0vh 2vh 2vh black"

                
              }}
            >


<h2
style = {styles.perct}
       
        >
          0% - March 12th
        </h2>

              Originating from the pixel world, CubePals! A new form of
              pixelated characters. Your best friends...  <br/> The public mint will
              happen in OpenSea


              <h1 style = {{padding: "1vh"}}></h1>
            </p>


     

            <b />
            <b />


            <p
            style = {styles.rMPP}
              className="rMPP"
           
        >

          <h2
          style = {styles.perct}>
         25%
        </h2>
        We will giveaway 15 CubePals to our Discord members and 1 ETH to a random OG CubePal Owner that white-list preordered
              <h1 style = {{padding: "1vh"}}></h1>


              </p>

            <b />
 

          
            <b />




            <p
            style = {styles.rMPP}
            className="rMPP"
            
            >


<h2
style = {styles.perct}
        >
          75%
        </h2>



        We will release merchandise and CubeCoin. Our own crypto-currency/token that will be used in phase 2 of this project. 

              <h1 style = {{padding: "1vh"}}></h1>
              
              
            </p>


            <p
            style = {styles.rMPP}
            className="rMPP"
            
            >


<h2
style = {styles.perct}
        >
          100%
        </h2>
        We will release a P2E game that will use CubePal assets to play

        <h1 style = {{padding: "1vh"}}></h1>
              
              
            </p>



            <p
            style = {styles.rMPP}
            className="rMPP"

             
            >


<h2
variants = {{
up: {y: 100},
down: {y: -100}
}}


className = "FUTURE"
id = "FUTURE"

style = {styles.perct}
       style = {{
     
       }}
        >
          FUTURE 
        </h2>

                
        We will keep updating the P2E game so it's more accessible and appropriate for a larger future project that will go alongside CubePals...
We will also release another related NFT collection that will crossover with CubePals
              <h1 style = {{padding: "1vh"}}></h1>

            </p>


         </div>
        </div> 


        
        </div>




      <div className="sect4" ref = {faqRef}>
 
<h1
style = {{
  fontSize: "7vh",
   float: "left",
   marginRight: "5vh",
   marginTop: "-10vh"
}}>
  FAQ
  </h1>

<ul
  style={{
    listStylePosition: "outside",
    color: "white",
    cursor: "pointer",
    listStyle : "none",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",


  }}
>
  <motion.li 
  id = "this1"
  animate = {{padding: v1? "5vh" : "5vh", height: v1? "fit-content" : "fit-content"}}
  style = {styles.items}
  onClick={() =>{
    console.log("A");
    const q1A = document.getElementById("q1A");

   setToggle(!toggle)

   setV1(!v1);

   } }> How many cubepals will be released? 
   <motion.div animate = {{opacity: v1? 1 : 0, display: v1? "block" : "none"}} style = {{opacity: 0, marginTop: "5vh", color: "", display: "none"}} className = "q1A" id = "q1A">There will be 10 Asta se que ,000 released!</motion.div>

  </motion.li>


  

  <motion.li
    animate = {{height: v3? "fit-content" : "fit-content"}}
     onClick = {() =>  setV3(!v3)}
    style = {styles.items}> What is a cubepal? 
    <motion.div animate = {{opacity: v3? 1 : 0, display: v3? "block" : "none"}} style = {{opacity: 0, marginTop: "5vh", display: "none"}} className = "q1A" id = "q1A"> A digital asset that will grant access to a P2E game among other things</motion.div>
    </motion.li>

  <motion.li

    animate = {{height: v4? "fit-content" : "fit-content"}}
     onClick = {() =>  setV4(!v4)}
    style = {styles.items}>  How do the Cube Rarities and Powers work?
    <motion.div animate = {{opacity: v4? 1 : 0, display: v4? "block" : "none"}} style = {{opacity: 0, marginTop: "5vh", display: "none"}} className = "q1A" id = "q1A">
     The Powers and Rarities will be used in the P2E game, rarities will multiply the power by 1.25x and 1.50x alongside access to special missions.

   


</motion.div>
    </motion.li>

  <motion.li
  onClick = {() => goTo(creditsRef)}
    animate = {{height: v5? "fit-content" : "fit-content"}}
     //onClick = {() =>  setV5(!v5)}
      style = {styles.items}> Who are the creators? 
      <motion.div animate = {{opacity: v5? 1 : 0, display: v5? "block" : "none"}} style = {{opacity: 0, marginTop: "5vh", display: "none"}} className = "q1A" id = "q1A"> </motion.div>
      </motion.li>
</ul>


</div>




<div className="credits" ref = {creditsRef}>

<h1
style = {{
  gridColumnStart: 2,
  gridColumnEnd: 2,
  gridRowStart: 1,
  gridRowEnd: 1,
}}>Meet the team</h1>

  <div className = "credits-artist"
  style = {{
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 2,
    gridRowEnd: 2,
    gridRowEnd: 2,
    margin: "5vh",
    fontSize: "3vh"

  }}>
  <h2    style = {styles.titles}>Operator</h2>
   <h4>Mr.Goon</h4>
  </div>

  <div className = "credits-Administrator"
  style = {{
    gridColumnStart: 2,
    gridColumnEnd: 2,    
    gridRowStart: 2,
    gridRowEnd: 2,
    gridRowEnd: 2,
    margin: "5vh",
    fontSize: "3vh"



  }}>
  <h2    style = {styles.titles}>Project Manager</h2>
    <h4>POLOUX</h4>
  </div>

  <div className = "credits-Programmer"
  style = {{
    gridColumnStart: 3,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 2,
    margin: "5vh",
    fontSize: "3vh"

  }}>
  <h2    style = {styles.titles}>Administrator</h2>
    <h4>Mr.HU</h4>
  </div>

  <div className = "credits-Programmer"
  style = {{
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 3,
    gridRowEnd: 3,

    fontSize: "3vh"

  }}>
  <h2    style = {styles.titles}>Developer</h2>
    <h4>A.Force</h4>
  </div>

  <div className = "credits-Programmer"
  style = {{
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 3,
    gridRowEnd: 3,
    fontSize: "3vh"

  }}>
  <h2    style = {styles.titles}>Artist</h2>
    <h4>MatPak</h4>
  </div>


  <div className = "credits-Programmer"
  style = {{
    gridColumnStart: 3,
    gridColumnEnd: 3,
    gridRowStart: 3,
    gridRowEnd: 3,
    fontSize: "3vh"
 

  }}>
    <h2
    style = {styles.titles}>Developer</h2>
    <h4>Pheanox</h4>
  </div>

  <div className = "credits-Programmer"
  style = {{
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 4,
    gridRowEnd: 4,
    fontSize: "3vh"


  }}>
    <h2
    style = {styles.titles}>Staff</h2>
    <h4>FastDart</h4>
  </div>


     </div>


     <div className = "footer" id = "footer">
       <h1>All rights reserved. Copyright CubePals @ 2022</h1>

       <h2>
         Reach us at:  
         <br />
       <a href = "https://twitter.com/PalsNf"><img src = {twitterIcon} style = {{height: "5vh", width: "5vh", margin: "1vh"}} /></a>
       
        <a href = "https://discord.gg/Pdypqbg2fF"><img src = {discordIcon} style = {{height: "5vh", width: "5vh", margin: "1vh"}} /></a>
         </h2>
         </div>

    </div>
  );
}

const styles = {
  title: {
    fontSize: "10vh",
    fontWeight: 150
  },

  t1: {
    fontSize: "2vh",
    color: "white",
    display: "inline-flex"
  },
  t2: {
    fontSize: "7vh",
    color: "white"
  },

  q1A:{
    height: "10vh",
    width: "5vh",
    backgroundColor: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: "2vh", 
 
  },

  items:{
    margin: "5vh",
    backgroundColor: "white",
    padding: "5vh",
    color: "black",
    borderRadius: "2vh", 
    fontSize: "5vh",
    height: "fit-content",
    width: "fit-content",
    overflow: "hidden"
  },

  perct:{
  fontSize: "3.4vh"
  },

  rmPP:{
    marginLeft: "7vh", 
    margin: "5vh", 
    borderBottom: ".5vh solid black",
    color: "black",
    textAlign: "center",
 alignItems: "center",
justifyContent: "center",
borderRadius: "2vh",
boxShadow: "0vh 2vh 2vh black",
backgroundColor: "white",
padding: "1vh"
  },

  titles:{
    textDecoration: "underline"
  }

};

export default App;
