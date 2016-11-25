var React=require('react');

var WheatherGrandChild=React.createClass({

 render:function(){
 return(<div className="container-fluid">
 <table className="table table-bordered table-inverse" >

 <tr>
 <th>Date:</th><br/>
 <td>{this.props.dt_txt}</td>
 </tr>
 <br/>

 <tr>
 <th>DESCRIPTION :</th><br/>
 <td>{this.props.description}</td>
 </tr>
 <br/>

 <tr>
 <th>HUMIDITY :</th><br/>
 <td>{this.props.humidity}</td>
 </tr>
 <br/>

 <tr>
 <th>PRESSURE :</th><br/>
 <td>{this.props.pressure}</td>
 </tr>
 <br/>

 <tr>
 <th>TEMPERATURE :</th><br/>
 <td>{this.props.temp}</td>
 </tr>
 <br/>



 <tr>
 <th>TEMPERATURE MINIMUM :</th><br/>
 <td>{this.props.temp_min}</td>
 </tr>
 <br/>

 <tr>
 <th>TEMPERATURE MAXIMUM:</th><br/>
 <td>{this.props.temp_max}</td>
 </tr>









 </table>
 </div>
)
}
});
 module.exports=WheatherGrandChild;
