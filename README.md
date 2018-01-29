# wordpress-with-docker

## How to use
### Initialize development environments.
1. run command `docker-compose up -d`
2. run command `npm i`
3. crate theme directory & modify the configuration file.
    + run command `mkdir -p htdocs/wp-content/themes/<theme name>`
    + run command `sed -e -i 's/twentyseventeen/<theme name>/g' config.js`
4. run command `gulp live`
5. access to http://localhost:1072 with browser

### Stop development environments.
1. Press Ctrl+c to stop gulp.
2. run command `docker-compose down`

### Start development environments.
1. run command `docker-compose up -d && gulp live`
2. access to http://localhost:1072 with browser
