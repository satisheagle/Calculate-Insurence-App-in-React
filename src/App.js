// STEP 1 - Include Dependencies
// Include react
import React from 'react'


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import protection from "./img/protection.png";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Recovery Period</Popover.Title>
    <Popover.Content>
      This shows <strong>Recovery Period</strong> Insurance
    </Popover.Content>
  </Popover>
);
// STEP 2 - Chart Data
// let chartData = [      
// {
//     label: "Estimated cost",
//     value: "150"
//   },
//   {
//     label: "Estimated cost",
//     value: "180"
//   }
 
// ];


// STEP 3 - Creating the JSON object to store the chart configurations
// let chartConfigs = {

//   type: "column2d", // The chart type
//   renderAt: 'chart-container',
//   width: "700", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       "theme": "fusion",
     
//       "xAxisName": "Assumptions",
//       "xAxisNameFontColor":"#06b7e1",
//       "palettecolors": "49dcfa,00b5e1",
//       "showValues": "1",
//       "numberPrefix": "$",
//       "majorTMWidth": "100",
//       "rotateValues": "0"
//     },
//     // Chart Data
//     data: chartData
//   }
// };

const chartConfigs = {
  type: 'column2d',// The chart type
  width: '700', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
      // Chart Configuration
      "chart": {
        "theme": "fusion",
      "xAxisName": "Assumptions",
      "xAxisNameFontColor":"#06b7e1",
      "palettecolors": "49dcfa,00b5e1",
      "showValues": "1",
      "numberPrefix": "$",
      "majorTMWidth": "100",
      "rotateValues": "0"
      },
      // Chart Data
      "data": [
        {
          "label": "Estimated cost",
          "value": "150"
      }, {
          "label": "Estimated cost",
          "value": "180"
      }]
      },
  };

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = chartConfigs;
    this.updateData = this.updateData.bind(this);
  }

//This function generates random number.
  getRandomNumber() {
    var value = document.getElementById("txt6").value;
   
    return value;
  }
  getRandomNumber2() {
   
    var value = document.getElementById("txt7").value;
   
    return value;
  }

  //Handler for update button.
  //Randomly updates the values of the chart.
  updateData() {
    
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[0].value = this.getRandomNumber();
    prevDs.data[1].value = this.getRandomNumber2();
    this.setState({
      dataSource: prevDs,
    });
  }
  
  render() {
    return (
      <div className="col-md-8 col-xs-12 plr5"> 
      
      <div className="col-md-12 col-xs-12"> 
      <div className="card">
            <div className="form-inline jc">
              <img className="pluslogo" src={protection} alt="" />
              <label className="plus">Out-of-pocket healthcare expenses</label>
               <span className="info">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </OverlayTrigger></span>
              <div className="form-group position-relative ml100">
                <input type="text" className="form-control" id="txtmonth" value="12" 
                 onKeyUp={this.sum}
                  />
                <div className="form-control-position">
                  <i className="">months</i>
                </div>
              </div>
            </div>
    </div>
      </div>
      <div className="col-md-12 col-xs-12 ofscroll"> 
      <ReactFC {...this.state} />
        
      </div>
      <div className="col-md-12 col-xs-12 ">
        <p className="plr">A serious illness with recovery lasting <span className="bcolor">12 months</span> could put your 
          financial down by <span className="bcolor">$359,000</span><span className="uline"> today </span>and by <span className="bcolor">$467,000</span> <span className="uline">in 10 years.</span></p> </div>
          <div className="col-md-4 offset-md-3 col-xs-12 ">
          <center><button className='btn btn-info btn-md' onClick={this.updateData}>START COMPARING QUOTES</button></center>
         
       </div>
      </div> 
    );
  }
}

export default App;


