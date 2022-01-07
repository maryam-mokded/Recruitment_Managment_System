import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../Services/employee.service';
import {InterviewsService} from '../../../Services/interviews.service';
import { ScaleLinear, ScalePoint, ScaleTime } from 'd3-scale';

var test: string = "test";
var somEmpl: number;
var s :number;
//console.log(test);
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})

export class DashboardAdminComponent implements OnInit {
  somEmpl?: number;
  somCond?: number;
  somInter?: number;
  list?: any[];
  annee: any[]=["annee"];
  nb: any[]=[];
  l: any[]=[];


  dataAxis = [];
  data:any[] = [];
  piedata: any[] = [];
  lastChart: any[] = [];

  single: any[] = [];
  multi: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date Reccrutement';
  showYAxisLabel = true;
  yAxisLabel = 'Nombre';

  colorScheme : any = {
    // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    domain: ['#ffc107', '#28a745', '#17a2b8', '#AAAAAA']
  };


  constructor(
    private employeeService: EmployeeService,
    // private interviewsService: InterviewsService,
    private router: Router) {}


    getData(){
      this.employeeService.getEmployeesList().subscribe( (data)=>{
        this.formateData(data);
        this.formatePieData(data);
      })
      this.employeeService.getEmployees().subscribe( (data)=>{
        this.formateLastData(data)
      })
    }


    formateLastData(data: any){
      const element = data._embedded;
      const dataArray = [];
      dataArray.push({name : "recruteurs" , value : element.recruteurs.length })
      dataArray.push({name : "admins" , value : element.admins.length })
      dataArray.push({name : "condidats" , value : element.condidatses.length })
      dataArray.push({name : "interviewers" , value : element.interviewers.length })
      this.lastChart = dataArray;
      this.somCond=element.condidatses.length;
  
    }
  
    formatePieData(data: any[]){
      const dataArrayYaxis: any[] = [];
      const dataArrayXaxis: any[] = [];
  
      for (const  element of data){
        if(!dataArrayYaxis.includes(element.competance) && element.competance !== null )dataArrayYaxis.push(element.competance);
  
      }
      for(const el of dataArrayYaxis){
        let i = 0;
        for (const  element of data){
          if(el === element.competance) i++
        }
        dataArrayXaxis.push(i);
        i = 0;
      }
  
      const result = [];
      for (const [i ,element] of dataArrayXaxis.entries()) {
        const object = {
          name : dataArrayYaxis[i],
          value :dataArrayXaxis[i]
        }
        result.push(object);
      }
      this.piedata = result;
  
    }
  
    formateData(data: any[]){
      const dataArrayYaxis: any[] = [];
      const dataArrayXaxis: any[] = [];
      this.somEmpl=data.length;
      for (const  element of data){
       
        const dateElement = new Date(element.dateEmbauche).toLocaleDateString();
        if(!dataArrayYaxis.includes(dateElement) && dateElement !== "Invalid Date")dataArrayYaxis.push(dateElement);
  
      }

this.somCond=0;
      //get nbre des condidats
      for (const  element of data){
       
        const dateElement = new Date(element.dateEmbauche).toLocaleDateString();
        if(!dataArrayYaxis.includes(dateElement) && dateElement == "Invalid Date")
        {
          this.somCond=this.somCond+1;
        }
          
      }


      for(const arrayDate of dataArrayYaxis){
        let i = 0;
        for (const  element of data){
          const dateElement = new Date(element.dateEmbauche).toLocaleDateString();
          if(dateElement === arrayDate) i++
        }
        dataArrayXaxis.push(i);
        i = 0;
      }
      const result = [];
      for (const [i ,element] of dataArrayXaxis.entries()) {
        const object = {
          name : dataArrayYaxis[i],
          value :dataArrayXaxis[i]
        }
        result.push(object);
      }
      this.data = result;
  
  
    }


  ngOnInit(): void {

    this.getData();

    //Get all employees
   /* this.employeeService.getUsers().subscribe(o =>{
      this.somEmpl = o;
      console.log(this.somEmpl);});*/

      //Get all Condidats
     /* this.employeeService.getCondidats().subscribe(o =>{
        this.somCond = o;
        console.log(this.somCond);});*/

     /*   this.employeeService.getInters().subscribe(i =>{
          this.somInter = i;
          console.log(this.somInter);});*/

          this.employeeService.getNbUsers().subscribe(j=>{
           
          var _x=0;
            for (var _i = 0; _i < j.length; _i+=2) {
              console.log(j[_i]);
              console.log(j[_i+1]);

              this.annee[0]="annee";
              this.nb[0]="nombre des employees";

              this.annee[_x+1]=j[_i];
              this.nb[_x+1]=j[_i+1];
              _x++;
              console.log(this.annee);
              console.log(this.nb);
            
            }

            this.list = j;
            console.log(this.list);});




    type EChartsOption = echarts.EChartsOption;


//Time

var chartDom = document.getElementById('time')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  series: [
    {
      name: 'hour',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 12,
      splitNumber: 12,
      clockwise: true,
      axisLine: {
        lineStyle: {
          width: 10,
          color: [[1, 'rgba(0,0,0,0.7)']],
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10
        }
      },
      splitLine: {
        lineStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 3,
          shadowOffsetX: 1,
          shadowOffsetY: 2
        }
      },
      axisLabel: {
        fontSize: 20,
        distance: 15,
        formatter: function (value) {
          if (value === 0) {
            return '';
          }
          return value + '';
        }
      },
      anchor: {
        show: true,
        icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
        showAbove: false,
        offsetCenter: [0, '-35%'],
        size: 120,
        keepAspect: true,
        itemStyle: {
          color: '#707177'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 12,
        length: '55%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: [0, '30%']
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: 'minute',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '70%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 20,
        showAbove: false,
        itemStyle: {
          borderWidth: 15,
          borderColor: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['0%', '-40%']
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: 'second',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      animationEasingUpdate: 'bounceOut',
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 4,
        length: '85%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 15,
        showAbove: true,
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['0%', '-40%']
      },
      data: [
        {
          value: 0
        }
      ]
    }
  ]
};

setInterval(function () {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes() + second / 60;
  var hour = (date.getHours() % 12) + minute / 60;

  option.animationDurationUpdate = 300;
  myChart.setOption<echarts.EChartsOption>({
    series: [
      {
        name: 'hour',
        animation: hour !== 0,
        data: [{ value: hour }]
      },
      {
        name: 'minute',
        animation: minute !== 0,
        data: [{ value: minute }]
      },
      {
        animation: second !== 0,
        name: 'second',
        data: [{ value: second }]
      }
    ]
  });
}, 1000);

option && myChart.setOption(option);

  }
}
