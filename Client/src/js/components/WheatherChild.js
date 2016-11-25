var React=require('react');
var WheatherGrandChild=require('./WheatherGrandChild.js');

var WeatherChild=React.createClass({


render:function()
{
  var arr=[];
  var temp='';
  var temp_min='';
  var temp_max='';
  var pressure='';
  var humidity='';
  var description='';
  
  var windspeed='';
  var dt_txt='';

  var aggregatedArray=this.props.data1;

  aggregatedArray.list.forEach(function(weather_data){

       dt_txt=weather_data.dt_txt;
       temp=weather_data.main.temp;
       temp_min=weather_data.main.temp_min;
       temp_max=weather_data.main.temp_max;
       pressure=weather_data.main.pressure;
       humidity=weather_data.main.humidity;
       description=weather_data.weather[0].description;

       windspeed=weather_data.wind.speed;

       console.log("data2");
       console.log(temp);
       arr.push(<WheatherGrandChild dt_txt={dt_txt}  windspeed={windspeed} temp={temp} temp_min={temp_min} description={description} temp_max={temp_max} pressure={pressure} humidity={humidity}/>);
  });

return(<div className="container-fluid " id="lower1">
       <table className="table table-inbox table-hover" >
                <tbody>
                {arr}
                </tbody>
                </table>
                </div>
      )
}
});
module.exports=WeatherChild;
