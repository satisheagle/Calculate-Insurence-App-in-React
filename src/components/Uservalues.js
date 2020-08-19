import React, { Component } from 'react';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// import InputMask from 'react-input-mask';
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Desired Replacement Income</Popover.Title>
    <Popover.Content>
      This shows <strong>Desired Replacement Income</strong> after tax
    </Popover.Content>
  </Popover>
);
const popover2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Out of Pocket</Popover.Title>
    <Popover.Content>
      This shows <strong>Healthcare expenses</strong>
    </Popover.Content>
  </Popover>
);
const popover3 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Home Expenses</Popover.Title>
    <Popover.Content>
      This shows <strong>Home Modification Expenses</strong> 
    </Popover.Content>
  </Popover>
);
const popover4 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Medical Expenses</Popover.Title>
    <Popover.Content>
      This shows <strong>Medical homecare Expenses</strong>
    </Popover.Content>
  </Popover>
);
const popover5 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Other Expenses</Popover.Title>
    <Popover.Content>
      This shows <strong>Transport, childcare etc..</strong> Expenses
    </Popover.Content>
  </Popover>
);

class Uservalues extends Component {
    
    sum = (e) => {
        var txtFirstNumberValue = document.getElementById('txt1').value;
        var txtSecondNumberValue = document.getElementById('txt2').value;
        var txt3NumberValue = document.getElementById('txt3').value;
        var txt4NumberValue = document.getElementById('txt4').value;
        var txt5NumberValue = document.getElementById('txt5').value;
        var month = document.getElementById('txtmonth').value;
        var sumall = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue)+ parseInt(txt3NumberValue)+ parseInt(txt4NumberValue);
        var result = sumall - parseInt(txt5NumberValue);
        if (!isNaN(result)) {
            document.getElementById('txt6').value = result;
        }
        var resultB = sumall * 1.2/month;
        if (!isNaN(resultB)) {
            document.getElementById('txt7').value = resultB;
        }
       
      };
  render() {
    
    return(
       
        
<div className="col-md-4 col-xs-12 plr5" >
<div className="col-md-12 col-xs-12">
    <div className="form-group">
    <label>Desired replacement income(after-tax) </label>
    <span className="info"> 
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <FontAwesomeIcon icon={faInfoCircle} />
     </OverlayTrigger></span>
        <div className="form-group position-relative">
        <input type="text" id="txt1" className="form-control" onKeyUp={this.sum}  />
                <div className="form-control-position">
                  <i className="">/month</i>
                </div>
              </div>
  
    </div>
    </div>
    <div className="col-md-12 col-xs-12">
    <div className="form-group">
    <label>Out-of-pocket healthcare expenses </label>
    <span className="info"> 
    <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
    <FontAwesomeIcon icon={faInfoCircle} />
     </OverlayTrigger></span>
    <input type="text" className="form-control" id="txt2"   onKeyUp={this.sum}  />
    </div>
    </div>
    <div className="col-md-12 col-xs-12">
    <div className="form-group">
    <label>Home modification expenses </label>
    <span className="info"> 
    <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
    <FontAwesomeIcon icon={faInfoCircle} />
     </OverlayTrigger></span>
    <input type="text" id="txt3" className="form-control"  onKeyUp={this.sum}  />
    </div>
    </div>
    <div className="col-md-12 col-xs-12">
    <div className="form-group">
    <label>Medical homecare expenses </label>
    <span className="info"> 
    <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
    <FontAwesomeIcon icon={faInfoCircle} />
     </OverlayTrigger></span>
    
    <div className="form-group position-relative">
    <input type="text" id="txt4" className="form-control"  onKeyUp={this.sum}  />
                <div className="form-control-position">
                  <i className="">/month</i>
                </div>
              </div>
   
    </div>
    </div>
    <div className="col-md-12 col-xs-12">
    <div className="form-group">
    <label>Other expenses(transport, childcare, etc) </label>
    <span className="info"> 
    <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
    <FontAwesomeIcon icon={faInfoCircle} />
     </OverlayTrigger></span>
    
    <div className="form-group position-relative ">
    <input type="text" id="txt5" className="form-control"  onKeyUp={this.sum}  />
                <div className="form-control-position">
                  <i className="">/month</i>
                </div>
              </div>
              


    </div>
    </div>
    <div className="col-md-12 col-xs-12" style={{display: 'none'}}>
    <div className="form-group"></div>
<label>1st bar </label>

<input type="text" className="form-control" id="txt6"   />
 </div>
             
<div className="col-md-12 col-xs-12" style={{display: 'none'}}>
    <div className="form-group">

  
<label>2nd bar</label>
<input type="text" className="form-control" id="txt7" 
// style={{display: 'none'}} 
/> 
</div>
 </div>
 </div>


    


    )
  }
}



export default Uservalues;