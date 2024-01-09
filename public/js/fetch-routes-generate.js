const fs = require('fs');
fs.readdir('./content', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    const routes = files.map((file) => {
      return '/' + file.replace('index.yml', '').replace('.yml', '');
    });
    fs.readFile('./nuxt.config.ts', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        let replaced = data
          .replace(/routes: \[.*\]/, `routes: ${JSON.stringify(routes)}`)
          .replaceAll('"', "'");

        // Write result back to nuxt.config.ts
        fs.writeFile('./nuxt.config.ts', replaced, 'utf-8', function (err) {
          console.log(replaced);
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
});
