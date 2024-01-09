const fs = require("fs");
// read theme color from _data/site.json
console.log(fs);
fs.readFile("./data/theme.json", "utf8", function (err, dataFile) {
  if (err) {
    console.log(err);
    return;
  }

  // parse file to JSON so that the variables can be accessed
  dataFile = JSON.parse(dataFile);

  // TODO: Check if dataFile.primary_theme_color is set
  // Open variables.scss and search/replace "$theme: ..." with color from data file
  fs.readFile(
    "./assets/style/_variables.scss",
    "utf-8",
    function (err, scssFile) {
      if (err) {
        console.log(err);
        return;
      }

      var replaced = scssFile;

      // Change the variables to whatever was set in the data file
      if (dataFile.primary_color) {
        const replacementString = dataFile.primary_color;
        replaced = replaced.replace(
          /\--color-primary: .*/g,
          "--color-primary: " + replacementString + ";"
        );
      }
      if (dataFile.secondary_color) {
        const replacementString = dataFile.secondary_color;
        replaced = replaced.replace(
          /\$color-secondary: .*/g,
          "$color-secondary: " + replacementString + ";"
        );
      }
      if (dataFile.anchor_color) {
        const replacementString = dataFile.anchor_color;
        replaced = replaced.replace(
          /\$color-anchor: .*/g,
          "$color-anchor: " + replacementString + ";"
        );
      }
      if (dataFile.background_effects_color) {
        const replacementString = dataFile.background_effects_color;
        replaced = replaced.replace(
          /\$color-background-effects: .*/g,
          "$color-background-effects: " + replacementString + ";"
        );
      }

      // Write result back to variables.scss
      fs.writeFile(
        "./assets/style/_variables.scss",
        replaced,
        "utf-8",
        function (err) {
          console.log(replaced);
          if (err) {
            console.log(err);
          }
        }
      );
    }
  );
});

// import fs from 'fs';
// // read theme color from _data/site.json
// fs.readFile('./data/theme.json', 'utf8', function(err, dataFile){

// 	if(err){
// 		console.log(err);
// 		return;
// 	}

// 	// parse file to JSON so that the variables can be accessed
// 	dataFile = JSON.parse(dataFile);

// 	var variablesFile = './assets/styles/_variables.scss';

// 	// TODO: Check if dataFile.primary_theme_color is set
// 	// Open variables.scss and search/replace "$theme: ..." with color from data file
// 	fs.readFile(variablesFile, 'utf-8', function (err, scssFile) {

// 		if(err){
// 			console.log(err);
// 			return;
// 		}

// 		var replaced = scssFile;

// 		// Change the variables to whatever was set in the data file
// 		if (dataFile.primary_color) {
// 			const replacementString = dataFile.primary_color;
// 			replaced = replaced.replace(/\$color-primary: .*/g, ('$color-primary: ' + replacementString + ';'));
// 		}
// 		// if (dataFile.secondary_color) {
// 		// 	const replacementString = dataFile.secondary_color;
// 		// 	replaced = replaced.replace(/\$color-secondary: .*/g, ('$color-secondary: ' + replacementString + ';'));
// 		// }
// 		// if (dataFile.anchor_color) {
// 		// 	const replacementString = dataFile.anchor_color;
// 		// 	replaced = replaced.replace(/\$color-anchor: .*/g, ('$color-anchor: ' + replacementString + ';'));
// 		// }
// 		// if (dataFile.background_effects_color) {
// 		// 	const replacementString = dataFile.background_effects_color;
// 		// 	replaced = replaced.replace(/\$color-background-effects: .*/g, ('$color-background-effects: ' + replacementString + ';'));
// 		// }

// 		// Write result back to variables.scss
// 		fs.writeFile(variablesFile, replaced, 'utf-8', function (err) {
// 			if(err){
// 				console.log(err);
// 			}
// 		});
// 	});
// });

// fetch-theme.js
// fetch('/_nuxt/data/theme.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(themeData => {
//     console.log(themeData);
//     const primaryColor = themeData['primary_color'];
//     console.log(primaryColor);
//     let scssUpdated = ''

//     fetch('/_nuxt/assets/style/_variables.scss')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then(scssData => {

//         scssData = scssData.replace(/\--color-primary: .*/g, `--color-primary: ${primaryColor};`);
//         scssUpdated = scssData
//         console.log(scssUpdated);

//       })
//       .catch(error => {
//         console.error(error);
//       });
//   })
//   .catch(error => {
//     console.error('Lỗi khi lấy dữ liệu chủ đề:', error);
//   });
