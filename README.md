# NeuroLab

A cross platform application created to replace an older application used in Ball State Physiology course Labs.

This app is being produced as part of a thesis that will analyze the way users use this modern UI versus the older DOS UI.

## How-To ##

Requirements:
- npm/node
- sass (from Ruby)
  - `sudo gem install sass`

Developing:
1. Clone the repository

2. In terminal, cd to the cloned directory

3. Run `npm install` to install all required packages
  - I suggest installing electron-prebulit and electron-packager globally
  - `npm install -g electron-prebuilt@0.36.9`
  - `npm install -g electron-packager`
  - Note: ^ may require sudo
  
4. Now run `electron .` to run the project

To watch for sass changes:
1. Open another terminal tab

2. cd to the `app` folder within the project folder

3. Run `sass --watch scss:styles`

Exporting:

1. cd to the project directory

2. Run the appropriate command
  - Mac: `electron-packager . --platform=darwin --icon=./app/images/icon.icns --arch=x64`
  - Windows: `electron-packager . --platform=win32 --icon=./app/images/icon.ico --arch=x64`
  - Linux (Debian): `electron-packager . --platform=linux --icon=./app/images/icon.ico --arch=x64`
  
Creating an Installer for Windows:

If you would like to create an installer, first install [InnoSetup](http://www.jrsoftware.org/isdl.php).
After installing InnoSetup, use `exe-maker.iss` as a TEMPLATE to build an exe installer.
* All that should need to change is directory paths.
