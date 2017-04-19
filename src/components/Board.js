import React, { Component } from 'react'
// min = 0, max = 16
var getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// fill our cells.
var fillerLogic = (contentArray) => {
    var contentIndex = getRandomInt(0, 16)    
    var containerIndex = getRandomInt(0, 16)  
    if(!usedContainerIndexes.includes(containerIndex) && contentArray[contentIndex] != 'used') {
        document.getElementById("cell-" + containerIndex).textContent = contentArray[contentIndex]
        usedContainerIndexes.push(containerIndex)
        contentArray.splice(contentIndex, 1, 'used')
        count++
    }
}

// how many times do we want our logic to complete.
var count = 0
// where we will store the indexes that have been used.
var usedContainerIndexes = []
// where we will store the contents to implant into our cells.
var cellContents = ['A', 'B', 'C', 'D',
                   'A', 'B', 'C', 'D',
                   'W', 'X', 'Y', 'Z',
                   'W', 'X', 'Y', 'Z']

class Board extends Component {
    constructor (props) {
    super (props);

      }
        componentDidMount() {
            for (var index = 0; index < 16;) {
                while (count == index) {
                    fillerLogic(cellContents)    
                }
                index ++
            }
        }
  render () {
    return <div className="board-container">
        <div id="row-1">
      <div id="cell-0" className="cell-container"></div>
      <div id="cell-1" className="cell-container"></div>
      <div id="cell-2" className="cell-container"></div>
      <div id="cell-3" className="cell-container"></div>
      </div>
      <div id="row-2">
      <div id="cell-4" className="cell-container"></div>
      <div id="cell-5" className="cell-container"></div>
      <div id="cell-6" className="cell-container"></div>
      <div id="cell-7" className="cell-container"></div>
      </div>
      <div id="row-3">
      <div id="cell-8" className="cell-container"></div>
      <div id="cell-9" className="cell-container"></div>
      <div id="cell-10" className="cell-container"></div>      
      <div id="cell-11" className="cell-container"></div>
      </div>
      <div id="row-4">
      <div id="cell-12" className="cell-container"></div>
      <div id="cell-13" className="cell-container"></div>
      <div id="cell-14" className="cell-container"></div>
      <div id="cell-15" className="cell-container"></div>
      </div>
    </div>
  }
}

export default Board
