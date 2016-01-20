# howacomputerworks
Creating an interactive website to teach users about the functionality of different parts of a computer intuitively.

![Homepage background](https://raw.githubusercontent.com/sahibjotsaggu/howacomputerworks/master/public/assets/images/main_bg.png)

## How to Run this project on Mac OS X

MongoDB shell version: 3.0.5

### Installing MongoDB

`brew update`

`brew install mongodb`

`brew install mongodb --devel`

`mkdir -p /data/db/` or `sudo mkdir -p /data/db`

`sudo chown -R $USER /data/db`

Node version: 5.3.0

NPM version: 3.5.2

Open terminal (1):

`git clone https://github.com/sahibjotsaggu/howacomputerworks.git`

`cd howacomputerworks`

Get [nvm](https://github.com/creationix/nvm#install-script):

`nvm install v5.3.0`

`nvm use 5.3.0`

`npm install`

**If you receive permission denied errors, try:**

`sudo chown -R $(whoami) ~/.npm`

then try `npm install` again

Open another terminal (2):

`mongod`

Go to terminal (1):

`npm start`

Go to [localhost:8030](http://localhost:8030)

## How to Run this project on Windows

[Download and Install MongoDB](https://www.mongodb.org/downloads#production)

[Download and Install NodeJS](https://nodejs.org/) (Stable version)

Open Command Prompt

`cd C:\Users\[your name]\`

`md data`

`cd data`

`md db`

`"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath "C:\Users\[your name]\data"` (with the quotes)

Open git bash or cygwin:

`cd ~/Documents/`

`git clone https://github.com/sahibjotsaggu/howacomputerworks.git`

`cd howacomputerworks`

`npm install`

`npm start`

Go to [localhost:8030](http://localhost:8030)

## Things To Do for “How A Computer Works” Project (Timeline)
1. Make Logo (Finish by January 30, 2016) [Incomplete]
2. Finish landing page graphic (Finish by January 10, 2016) [Incomplete]
3. Finish Graphics for major components (Finish by January 17, 2016) [Incomplete]

## Completed Tasks 
1. Finish landing page layout (Finished January 2, 2016) [Complete]

## Contributers
[Sahibjot Saggu](http://www.sahibjot.me/) and [Neeraj Aggarwal](http://www.neerajaggarwal.com/)

## License
Licensed under the ISC License.
