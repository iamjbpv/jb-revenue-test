import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import data from "./data.json";
import annotationdata from "./annotationdata.json";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const revenue = data.map((item) => {
    return parseFloat(item.Revenue.replace("$", ""));
  });
  const dateData = data.map((item) => {
    return item.Date;
  });

  const chartOptions: any = {
    series: [
      {
        data: revenue,
      },
    ],
    options: {
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#008FFB"],
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     opacityFrom: 0.91,
      //     opacityTo: 0.1,
      //   },
      // },
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "date",
        categories: dateData,
      },
      annotations: {
        points: annotationdata,
      },
    },
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JB Villamayor Revenue
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div id="wrapper">
        <div id="chart-line2">
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            height={500}
          />
        </div>
        <div id="chart-line">
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
