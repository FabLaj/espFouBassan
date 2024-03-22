import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const depths = [];

export default class Graph extends Component{

    generateDataPoints(lesProfondeurs) {
        // const data = [];
        // data.push({x: new Date("2022-08-22T10:37:00"), y: 12});
        // return data;
		const data = [];
        lesProfondeurs.map((prof) => 
        {
            data.push({x: new Date(prof[0]), y: prof[1]});
        })
        console.log(data);
        return data;
	}

    render()
    {
        const options = {
            theme: "light2",
            animationEnabled: true,
            zoomEnabled: true,
            title:{
                text: "Profondeur sur le temps"
            },
            axisX:{
                xValueType: "dateTime",
                ValueFormatString: "hh:mm:fff",
            },
            data: [{
                type:"line",
                dataPoints: this.generateDataPoints(this.props.lesProfondeurs)
            }]
        }

        return (
            <div>
                <CanvasJSChart options = {options}/>
            </div>
        )
    }   
}