$(document).ready(function() {
  /////////////////// Download Speed ////////////////////////////////////
    var clearTimer = setInterval(function () {
    var userImageLink =
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png" + '?n=' + Math.random();
    var time_start, end_time;

// The size in bytes
    var downloadSize = 5616998;
    var downloadImgSrc = new Image();
    downloadImgSrc.onload = function () {
      end_time = new Date().getTime();
      displaySpeed();
    };
    time_start = new Date().getTime();
    downloadImgSrc.src = userImageLink;
    function displaySpeed() {
      var timeDuration = (end_time - time_start) / 1000;
      var loadedBits = downloadSize * 8;

      /* Converts a number into string
      using toFixed(2) rounding to 2 */
      var bps = (loadedBits / timeDuration).toFixed(2);
      var speedInKbps = (bps / 1024).toFixed(2);
      var speedInMbps = (speedInKbps / 1024).toFixed(2);
      var mbps = parseFloat(speedInMbps)
      var num = (mbps).toFixed(0)

      $('#speed').html(speedInMbps )
      var speed = {
        "type": "gauge",
        theme: 'light',
        'font-color': 'whitesmoke',

        title: {
          text: "Download Speed",
          'font-color': 'whitesmoke',
          'offset-x': 0,
          'offset-y': 300,
        },
        subtitle: {
          text: mbps+ " Mbps",
          'font-color': 'whitesmoke',
          'offset-y': 300,
          'font-size': 18
        },

        backgroundColor: 'none',
        plotarea: {
          background: 'transparent'
        },
        "series": [{
          "values": [mbps],
          "csize": "25%", //Needle Indicator Width
          "size": "100%", //Needle Indicator Length
          'background-color': 'red',
        }],
        'scale-r': {
          aperture: 270,     //Specify your scale range.
          minValue: 0,
          maxValue: 200,

          center: {  //Pivot Point
            size:10,
            'background-color': "#221F1F",
            'border-color': "#221F1F"
          },
          item:{
            'font-color': 'whitesmoke',
            'offset-r': 0
          },
          ring: {
            'background-color': '#221F1F',
          },
          'font-color': 'whitesmoke',
          tick: {
            'line-color': "whitesmoke",
            'line-style': "solid", //solid, dashed, or dotted
            'line-width':3,
            size:15,
            placement: "inner", //outer, inner, or cross,
            'font-color': 'whitesmoke',
          },
        },
      };
      zingchart.render({
        id: 'gauge',
        data: speed,
      });
    }
    }, 1000);
    //////////////////////////////End Download Speed /////////////////////////////////
    /////////////////////////////Start Geo location /////////////////////////////////
    $('#checkSpeed').hide()
    let API_KEY = '<your api key>';

    $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + API_KEY, function(data) {
    var isp = JSON.stringify(data, null, 2)
      console.log(data)
      $('#log').html(
        '<table>'+
        '<tr><th>Ip Address: </th><td>'+ data.ip +'</td></tr>' +
        '<tr><th>ISP: </th><td>'+ data.isp +'</td></tr>'+
        '<tr><th>Longitude: </th><td>'+ data.longitude +'</td></tr>' +
        '<tr><th>Latitude: </th><td>'+ data.latitude +'</td></tr>'+
        '<tr><th>City: </th><td>'+data.city +'</td></tr>' +
        '<tr><th>County: </th><td>'+ data.district +'</td></tr>'+
        '<tr><th>State: </th><td>'+data.state_prov +'</td></tr>' +
        '<tr><th>Zip Code: </th><td>'+ data.zipcode +'</td></tr>'+
        '<tr><th>Country: </th><td>'+ data.country_name  +'</td></tr>' +
        '<tr><th>Continent: </th><td>'+data.continent_name +'</td></tr>'+
        '</table>'
      );
        var map = [{
          type:'scattermapbox',
        lat:[data.latitude],
        lon:[data.longitude],
        mode:'markers',
        marker: {
        size:14
      },
      text:[data.city],

    }]

  var layout = {
    autosize: true,
    // hovermode:'closest',
    mapbox: {
      style: 'streets',
      bearing:0,
      scrollzoom: false,
      center: {
        lat:data.latitude,
        lon:data.longitude
      },
      pitch:0,
      zoom:9
    },
    margin: { r: 0, t: 0, b: 0, l: 0 }
  }
  var config = {
          responsive: true,
    scrollzoom: false,
    staticPlot: true
        }

      Plotly.setPlotConfig({
        mapboxAccessToken: "<your access token>"
      })

      Plotly.newPlot('map', map, layout, config)
    });
    //////////////////////////////////// End Geo location ///////////////////////////////////////////////////////////////
//////////////////////////////////// Start upload speed ////////////////////////////////////////

///////////////////////////////////  End upload speed //////////////////////////////////////////
////////////////////////////////// Start ping test /////////////////////////////////////////////

  /////////////////////////////// End ping test ///////////////////////////////////////////////
  /////////////////////////////// Start latency test //////////////////////////////////////////

  ////////////////////////////// End latency test /////////////////////////////////////////////
})

