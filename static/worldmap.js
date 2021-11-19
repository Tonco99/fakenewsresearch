var mappa = home_json['map_papers'];

      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(mappa, 'country'),
        z: unpack(mappa, 'papers'),
        text: unpack(mappa, 'country'),
          colorscale: [
              [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
              [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
              [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: ' papers',
              thickness: 0.5,
              len: 0.5
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 0.2
              }
          }
      }];


      var layout = {
          geo: {
          projection: {
              type: 'robinson'
            }
          }
      };

      Plotly.newPlot("worldmap", data, layout, {showLink: false});
