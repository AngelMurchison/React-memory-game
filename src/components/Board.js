import React, { Component } from 'react'
import Cell from './Cell'
import image0 from './images/burrito.png'
import image1 from './images/pizza.jpg'
import image2 from './images/spaghetti.jpg'
import image3 from './images/taco.png'
// where we will store the contents to implant into our cells.
var contents = [image0, image0, image1, image1, 
                   image2, image2, image3, image3,
                   image0, image0, image1, image1,
                   image2, image2, image3, image3]
var shuffledContents = []

var content1 = ""
var content2 = ""
var index1 = ""
var index2 = ""


// min = 0, max = 16
var getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// var showImage = (cell) => {
//     var i = cell.getAttribute("src") - "img-"
//                     cell.setAttribute("src", shuffledContents[i])
//                     content2 = content1
//                     index2 = index1
//                     content1 = cell.getAttribute("src")
//                     index1 = i
//                     console.log("current index:" + index1)
//                     console.log(content1)
//                     console.log("previous index:" + index2)
//                     console.log(content2)
// }

// var gameLogic = (cell) => {
    
//                     if(content1 !== "" && content2 !== ""){
//                         if(content1 == content2){
//                             cell.setAttribute("style", "opacity: 1")
//                             document.getElementById("img-" + index2).setAttribute("style", "opacity: 1")

//                             cell.removeEventListener("click", showImage)

//                             console.log("correct")
//                             content1 = ""
//                             content2 = ""
//                         }
//                         else if(content1 !== content2){
//                             cell.setAttribute("style", "opacity: 0")
//                             document.getElementById("img-" + index2).setAttribute("style", "opacity: 0")
//                             console.log("incorrect")
//                             content1 = ""
//                             content2 = ""
//                         }
//                     }
// }

class Board extends Component {
    constructor (props) {
    super (props);
      }
        componentDidMount(){
            var count = 0
            for (var index = 0; index < 16;) {
                while (count == index) {
                    var contentIndex = getRandomInt(0, 16)    
                    var cellIndex = getRandomInt(0, 16)

                    if(!Object.keys(shuffledContents).includes(cellIndex) && contents[contentIndex] != 'used') {
                    shuffledContents.push(contents[contentIndex])
                    contents.splice(contentIndex, 1, 'used')
                    count++
    }    
                }
                index ++
            }    
            console.log(shuffledContents)
            console.log(Object.keys(shuffledContents))
            Object.keys(shuffledContents).map((v, i, list) => {
                var cell = document.getElementById("img-" + i)
                // defining this function in-line with addEventListener() made it impossible to find inside of gameLogic. Binding?
                var showImage = () => {
                    cell.style.opacity = "1"
                    cell.setAttribute("src", shuffledContents[i])
                    content2 = content1
                    index2 = index1
                    content1 = cell.getAttribute("src")
                    index1 = i
                }
                cell.addEventListener("click", showImage)
                cell.addEventListener("click", function gameLogic(){
                    if(content1 !== "" && content2 !== ""){
                        if(content1 == content2){
                            document.getElementById("img-" + i).style.opacity = "1"
                            document.getElementById("img-" + index2).style.opacity = "1"
                            cell.removeEventListener("click", showImage(), true)
                            cell.id = "disabled"
                            console.log("correct")
                            content1 = ""
                            content2 = ""
                        }
                        else if(content1 !== content2){
                            setTimeout(()=>{
                            document.getElementById("img-" + i).style.opacity = "0"
                            document.getElementById("img-" + index2).style.opacity = "0"
                            console.log("incorrect")
                            content1 = ""
                            content2 = ""
                            }, 500)
                         }
                    }
                })



                    // cell.addEventListener("click", () => {
                    // cell.setAttribute("src", shuffledContents[i])
                    // content2 = content1
                    // index2 = index1
                    // content1 = cell.getAttribute("src")
                    // index1 = i
                    // console.log("current index:" + index1)
                    // console.log(content1)
                    // console.log("previous index:" + index2)
                    // console.log(content2)


                    // if(content1 !== "" && content2 !== ""){
                    //     if(content1 == content2){
                    //         cell.setAttribute("style", "opacity: 1")
                    //         document.getElementById("img-" + index2).setAttribute("style", "opacity: 1")

                    //         cell.removeEventListener("click", this)

                    //         console.log("correct")
                    //         content1 = ""
                    //         content2 = ""
                    //     }
                    //     else if(content1 !== content2){
                    //         cell.setAttribute("style", "opacity: 0")
                    //         document.getElementById("img-" + index2).setAttribute("style", "opacity: 0")
                    //         console.log("incorrect")
                    //         content1 = ""
                    //         content2 = ""
                    //     }
                    // }



                    // if (content1 == ""){
                    //     content1 = cell.getAttribute("src")
                    //     index1 = v
                    //     console.log(content1)
                    //     console.log(content2)
                    // }
                    // if (content2 == ""){
                    //     content2 = cell.getAttribute("src")
                    //     index2 = v
                    //     console.log(content1)
                    //     console.log(content2)
                    // }
                    // while (content1 !== "" && content2 !== ""){
                    //     if (content1 !== content2) {
                    //         cell = document.getElementById("img-" + index1)
                    //         cell.setAttribute("src", "")
                    //         cell = document.getElementById("img-" + index2)
                    //         cell.setAttribute("src", "")
                    //         content1 = ""
                    //         content2 = ""
                    //     }
                    // }
            })
        }
  render () {
    return <div className="board-container">
        <div id="row-1">
            <Cell number="0"  />
            <Cell number="1"  />
            <Cell number="2"  />
            <Cell number="3"  />
      </div>
      <div id="row-2">
            <Cell number="4"  />
            <Cell number="5"  />
            <Cell number="6"  />
            <Cell number="7"  />
      </div>
      <div id="row-3">
            <Cell number="8"  />
            <Cell number="9"  />
            <Cell number="10" />
            <Cell number="11" />
      </div>
      <div id="row-4">
            <Cell number="12" />
            <Cell number="13" />
            <Cell number="14" />
            <Cell number="15" />
      </div>
    </div>
  }
}

export default Board
