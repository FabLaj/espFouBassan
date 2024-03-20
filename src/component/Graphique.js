import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Graph extends Component{
    generateDataPoints(lesProfondeurs) {
		const data = [];
        lesProfondeurs.map((prof) => 
        {
            data.push({x: prof[0], y: prof[1]});
        })
        return data;
	}

    render()
    {
        // console.log("Les prof recu graphique: ");
        // console.log(this.props.lesProfondeurs)
        const options = {
            theme: "light2",
            animationEnabled: true,
            zoomEnabled: true,
            title:{
                text: "Profondeur sur le temps"
            },
            data: [{
                type:"line",
                xValueType: "dateTime",
                xValueFormatString: "hh:mm:fff",
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