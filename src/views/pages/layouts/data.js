const basicAreaChart = {
  series: [{
    name: 'Sales',
    data: [130, 210, 300, 290, 150, 50, 210, 280, 105],
  }, {
    name: 'Purchase',
    data: [-150, -90, -50, -180, -50, -70, -100, -90, -105]
  }],
  slinesone : {
    colors: ['#28C76F', '#EA5455'],
    chart: {
    type: 'bar',
    height: 310,
    stacked: true,
    zoom: {
      enabled: true
    }
    },
    responsive: [{
      breakpoint: 280,
      options: {
        legend: {
        position: 'bottom',
        offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        borderRadiusApplication: "end", // "around" / "end" 
        borderRadiusWhenStacked: "all", // "all"/"last"
        columnWidth: '20%',
      },
    },
      dataLabels: {
      enabled: false
    },
    yaxis: {
      min: -200,
      max: 300,
      tickAmount: 5,
    },
    xaxis: {
      categories: [' Jan ', 'Feb', 'Mar', 'Apr',
        'May', 'Jun' , 'Jul' , 'Aug', 'Sep'
      ],
    },
    yaxis: {
      labels: {
        offsetX: -15, // Adjust horizontal alignment
      },
    },
    legend: {show: false},
    fill: {
      opacity: 1
    }
}
};

const salesAnalysis = {
  series: [
    {
      name: "Sales Analysis",
      data: [25, 30, 18, 15, 22, 20, 30, 20, 22, 18, 15, 20],
    },
  ],
  sline: {
    chart: {
      height: 273,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF9F43"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {
      min: 10,
      max: 60,
      tickAmount: 5,
      labels: {
        formatter: (val) => {
          return val / 1 + "K";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  },
};

const salesDaychart = {
  series: [{
    name: 'Sales',
    data: [18, 20, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
  }, {
    name: 'Purchase',
    data: [40, 30, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },  
    xaxis: {
      categories: ['2 am', '4 am', '6 am', '8 am', '10 am', '12 am', '14 pm', '16 pm', '18 pm', '20 pm','22 pm', '24 pm'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const salesWeekchart = {
  series: [{
    name: 'Sales',
    data: [20,  18, 25,  10,  40, 8, 30]
  }, {
    name: 'Purchase',
    data: [30,  50, 40,  30, 50, 30, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '50%',
      },
    }, 
    xaxis: {
      categories: ['23-1-25', '24-1-25', '25-1-25', '26-1-25', '27-1-25', '28-1-25', '28-1-25'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const salesMonthchart = {
  series: [{
    name: 'Sales',
    data: [18, 25, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
  }, {
    name: 'Purchase',
    data: [50, 40, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },  
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const salesQuarterchart = {
  series: [{
    name: 'Sales',
    data: [18, 25, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
  }, {
    name: 'Purchase',
    data: [50, 40, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const salesHalfchart = {
  series: [{
    name: 'Sales',
    data: [18, 25, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
  }, {
    name: 'Purchase',
    data: [50, 40, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },  
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const salesPurchase = {
  series: [{
    name: 'Sales',
    data: [18, 25, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
  }, {
    name: 'Purchase',
    data: [50, 40, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
  }],
  sline: {
    chart: {
      height: 245,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FE9F43', '#FFE3CB'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 8, 
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },  
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1 + 'K'
        },
        offsetX: -15,
        style: {
          colors: '#6B7280', 
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -16,
        top: 0,
    bottom: 0,
    right: 0, 
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  }
}

const customerChart = {
  series: [70, 70],
  chart: {
    height: '130px',
    width: '100%',
    type: 'radialBar',
    parentHeightOffset: 0,
    offsetX: 0, // Adjust horizontal alignment if needed
    offsetY: 0, 
    toolbar: {
      show: false,
    },
    plotOptions: {
    radialBar: {
      hollow: {
        margin: 10, // Gap between radial bars
        size: '30%', // Inner hollow size
      },
      track: {
        background: '#E6EAED', // Background color for unfilled track
        strokeWidth: '100%',
        margin: 5, // Margin between tracks
      },
      strokeWidth: 'rounded',
      dataLabels: {
        name: {
          offsetY: -5, // Fine-tune label position
        },
        value: {
          offsetY: 5, // Adjust value position
        },
      },
    },
  },
  grid: {
    padding: {
      top: 0, // Remove extra padding at the top
      bottom: 0, // Remove extra padding at the bottom
      left: 0, // Remove extra padding on the left
      right: 0, // Remove extra padding on the right
    },
  },
  stroke: {
    lineCap: 'round', // Rounded stroke ends
  },
  colors: ['#E04F16', '#0E9384'],  
  labels: ['First Time', 'Return'],  
  },  
}

const salesStatistics = {
  series: [{
  name: 'Revenue',
  data: [9, 25, 25, 20, 20, 18, 25, 15 , 20, 12, 8, 20],
  }, {
  name: 'Expenses',
  data: [-10, -18, -9, -20, -20, -10, -20, -20, -8, -15, -18, -20]
  }],  
  sline: {
    grid: {
      padding: {
        top: 5, // Adds space on the left
        right: 5, // Adds space on the right
      },
    },
    colors: ['#0E9384', '#E04F16'],
    chart: {
      type: 'bar',
      height: 290,
      stacked: true,        
      zoom: {
        enabled: true
      },    
    },  
    responsive: [{
      breakpoint: 280,
      options: {
        legend: {
        position: 'bottom',
        offsetY: 0
        }
      }
    }],
    plotOptions: {
    bar: {
      horizontal: false,
          borderRadius: 4,
        borderRadiusApplication: "around", // "around" / "end" 
        borderRadiusWhenStacked: "all", // "all"/"last"
      columnWidth: '20%',
    },
    },
      dataLabels: {
      enabled: false
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: (val) => {
          return val / 1 + 'K'
        },
      },
      min: -30,
      max: 30,
      tickAmount: 6,
    },
    xaxis: {
      categories: [' Jan ', 'Feb', 'Mar', 'Apr',
        'May', 'Jun' , 'Jul' , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
    },
    legend: {show: false},
    fill: {
    opacity: 1
    }
  }
};

const topCategory = {
  type: 'doughnut', // Chart type
  data: {
    labels: ['Lifestyles','Sports', 'Electronics'],
    datasets: [{
      label: 'Semi Donut',
      data: [16, 24, 50],
      backgroundColor: ['#092C4C', '#E04F16', '#FE9F43'],
      borderWidth: 5,
      borderRadius: 10,
      borderColor: '#fff', // Border between segments
      hoverBorderWidth: 0,   // Border radius for curved edges
      cutout: '50%',   
    }]
  },
  options: {
  layout: {
    padding: {
      top: -20,    // Set to 0 to remove top padding
      bottom: -20, // Set to 0 to remove bottom padding
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false // Hide the legend
    }
  },
  }
}

const heatChart = {
  sline: {
    chart: {
      type: 'heatmap',
      height: 340,
    },
    plotOptions: {
      heatmap: {
        radius: 4,
        enableShades: false,
        colorScale: {
          ranges: [{
              from: 0,
              to: 99,
              color: '#FFE3CB'
            },
            {
              from: 100,
              to: 200,
              color: '#FE9F43'
            },
          ],
        },

      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      padding: {
        top: -20,
        bottom: 0,
        left: 0,
        right: 0, // Minimize padding around the heatmap
      },
    },
    yaxis: {
      labels: {
        offsetX: -15, // Adjust horizontal alignment
      },
    },
  },
  series: [
    {
      name: "2 Am",
      data: [{
        x: 'Mon',
        y: 100
      },
      {
        x: 'Tue',
        y: 100
      }, 
      {
        x: 'Wed',
        y: 100
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 32
      },
      {
        x: 'Sat',
        y: 32
      },
      {
        x: 'Sun',
        y: 32
      },
    ]
    },
    {
      name: "4 Am",
      data: [{
        x: 'Mon',
        y: 100,
        color: '#ff5722'
      },
      {
        x: 'Tue',
        y: 100
      }, 
      {
        x: 'Wed',
        y: 100
      }, 
      {
        x: 'Thu',
        y: 120
      },
      {
        x: 'Fri',
        y: 32
      },
      {
        x: 'Sat',
        y: 50
      },
      {
        x: 'Sun',
        y: 40
      },
    ]
    },
    {
      name: "6 Am",
      data: [{
        x: 'Mon',
        y: 22
      },
      {
        x: 'Tue',
        y: 29
      }, 
      {
        x: 'Wed',
        y: 13
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 32
      },
      {
        x: 'Sat',
        y: 32
      },
      {
        x: 'Sun',
        y: 32
      },
    ]
    },
    {
      name: "8 Am",
      data: [{
        x: 'Mon',
        y: 0
      },
      {
        x: 'Tue',
        y: 29
      }, 
      {
        x: 'Wed',
        y: 13
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 30
      },
      {
        x: 'Sat',
        y: 100
      },
      {
        x: 'Sun',
        y: 100
      },
    ]
    },
    {
      name: "10 Am",
      data: [{
        x: 'Mon',
        y: 200
      },
      {
        x: 'Tue',
        y: 200
      }, 
      {
        x: 'Wed',
        y: 200
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 0
      },
      {
        x: 'Sat',
        y: 0
      },
      {
        x: 'Sun',
        y: 32
      },
    ]
    },
    {
      name: "12 Am",
      data: [{
        x: 'Mon',
        y: 0
      },
      {
        x: 'Tue',
        y: 0
      }, 
      {
        x: 'Wed',
        y: 75
      }, 
      {
        x: 'Thu',
        y: 0
      },
      {
        x: 'Fri',
        y: 0
      },
      {
        x: 'Sat',
        y: 0
      },
      {
        x: 'Sun',
        y: 0
      },
    ]
    },
    {
      name: "14 Pm",
      data: [{
        x: 'Mon',
        y: 0
      },
      {
        x: 'Tue',
        y: 20
      }, 
      {
        x: 'Wed',
        y: 13
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 0
      },
      {
        x: 'Sat',
        y: 0
      },
      {
        x: 'Sun',
        y: 32
      },
    ]
    },
    {
      name: "16 Pm",
      data: [{
        x: 'Mon',
        y: 13
      },
      {
        x: 'Tue',
        y: 20
      }, 
      {
        x: 'Wed',
        y: 13
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 200
      },
      {
        x: 'Sat',
        y: 13
      },
      {
        x: 'Sun',
        y: 32
      },
    ]
    },
    
    {
      name: "18 Am",
      data: [{
        x: 'Mon',
        y: 0
      },
      {
        x: 'Tue',
        y: 20
      }, 
      {
        x: 'Wed',
        y: 13
      }, 
      {
        x: 'Thu',
        y: 32
      },
      {
        x: 'Fri',
        y: 0
      },
      {
        x: 'Sat',
        y: 200
      },
      {
        x: 'Sun',
        y: 200
      },
    ]
    },
  ]
};


export { 
  basicAreaChart, 
  salesAnalysis, 
  salesDaychart, 
  salesWeekchart, 
  salesMonthchart, 
  salesQuarterchart, 
  salesHalfchart, 
  salesPurchase,
  customerChart,
  salesStatistics,
  heatChart,
  topCategory
};

