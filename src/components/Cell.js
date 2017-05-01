import React, { Component } from 'react'

class Cell extends Component {

  render () {
    var divId="cell-" + this.props.number  
    var imgId="img-" + this.props.number
    return <div id={divId} className="cell-container"><img src={this.props.src}id={imgId} height="100" width="100"/></div>
  }
}
export default Cell


        // componentDidMount() {
        //             if (click1 = "") {
        //                 click1 = document.getElementById("img-" + this.props.number)
        //                 thisClick = click1
        //             }
        //             if (click2 = "") {
        //                 click2 = document.getElementById("img-" + this.props.number)
        //                 thisClick = click2
        //             }
                
        //         thisClick.addEventListener("click", () => { 
        //             if( click1 === "" && click2 === "" ) {
        //                 thisImg = document.getElementById("img-" + this.props.number)
        //                 thisImg.style.opacity = "1.0"
        //                 this.setState({src1: thisImg.getAttribute("src").toString(),
        //                                img1: thisImg})
        //             }
        //             else if(this.state.src1 !== "" && this.state.src2 === "") {
        //                 thisImg = document.getElementById("img-" + this.props.number)
        //                 thisImg.style.opacity = "1.0"
        //                 this.setState({src2: thisImg.getAttribute("src").toString(),
        //                                img2: thisImg})

        //                 if(this.state.src1 === this.state.src2) {
        //                     this.state.img1.style.opacity = "1.0"
        //                     this.state.img2.style.opacity = "1.0"
        //                     this.setState({src1: "",
        //                                    src2: "", 
        //                                    img1: "", 
        //                                    img2: ""})
        //                 }
        //                 else if(this.state.src1 != this.state.src2 && this.state.src1 != "" && this.state.src2 != "") {
        //                     thatImg.style.opacity = "0.2"
        //                     thisimg.style.opacity = "0.2"
        //                     this.setState({src1: "", 
        //                                    src2: "",
        //                                    img1: "",
        //                                    img2: ""})
        //                 }
        //         }
        //     })
        // }
