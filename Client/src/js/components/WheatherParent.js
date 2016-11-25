var React=require('react');
var WeatherChild=require('./WheatherChild.js');
var fun=false;
var WheatherParent=React.createClass({
getInitialState :function()
{
return({dataArray:[]});
},
getDataWithLocation:function()
{
console.log("enter point");
$.ajax({
url:'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.cityBar.value+'&appid=3df6daf869e3fea120f0aa7d599a2577',
dataType:'json',
async:false,
type:'GET',
success:function(data)
{
  fun=true;
  console.log("DataWithLocation1");
  console.log(data);
  this.setState({dataArray:data});

}.bind(this),
error: function(xhr, status, err) {
      console.log("hello bob");
   console.error(err.toString());
 }.bind(this),

});

},
render:function()
{
var done;
if(fun)
{
  done=<WeatherChild data1={this.state.dataArray} />
}
console.log("data1");
console.log(this.state.dataArray);
return(
        <div className="form-group" id="search">
          <input type="text" className="form-control"  ref="cityBar" placeholder="Search your content"  id="t12"/>
        <button type="submit" onClick={this.getDataWithLocation} className="btn btn-default" id="button">Search</button>
     {done}

        </div>)

}
})
module.exports=WheatherParent;
