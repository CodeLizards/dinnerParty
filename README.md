Dinner Party App for super fun dinner partying.

Welcome to the unassumingQuasar wiki!

Dinner Party is a group project being done at Hack Reactor.

Our tech stack:
* React
* Postgres
* Node/Express


To develop the front-end, first make sure to be in the client directory and:
```
npm install
```
Then, make sure to install webpack-dev-server:
```
npm install webpack-dev-server -g
```
Then, make sure to be in the client directory and run:
```
npm run start
```
This will run the webpack-dev-server and give start a local server that will reflect the changes you make


For the back end, set up postgreSQL with [this](https://www.codefellows.org/blog/three-battle-tested-ways-to-install-postgresql)

Then after following all of the instructions, run the command:
```
createdb dinner
```
Then run postgreSQL with the command:
```
psql
```
To see all of the databases:
```
\l
```
To select the proper database:
```
\connect dinnerParty
```

To show all tables of database:
```
\dt
```
## Seeding the database
To seed the database uncomment the code in recipeSeeds.js and add a food2Fork API key (free at http://food2fork.com/about/api). Then run recipeSeeds.js and the database will be seeded.

# REQUEST HANDLERS DATA FORMAT:

POST REQUEST
## CreateEvent 
**expects:**
```
req.body = {
location:
eventName:
description:
date:
cost:
}
```
**returns:**
json object:
{
location:
eventName:
description:
date:
cost:
}


POST REQUEST
## UpdateEvent 
**expects:**
```
req.body = {
//whatever properties on event (see above) it needs to change:
//i.e.
//name: 'Ninja Turtles Bash'
}
```
**returns:**
json object with updated properties:
{
location: 'my updated location'
eventName: 'same name'
description: 'my updated description'
date: 'same date'
cost: 'same cost'
}



GET REQUEST
## getAllEvents 
**expects:**
nothing.

**returns:**
array of events with guestlist as property on each event object into list
```
[{name: 'Wine and Dine', location: 'mi casa', cost: '$100', description: 'supa fun tyme', date: 'rice meow', guestlist: ['Elizabeth Harris', 'George Harrison'] }, {...}]
```

POST REQUEST
## getAllGuests 
**expects:**

```
req.body = {
eventName: 'My event Name'
}
```

**returns**
array of guests
```
[{name: 'Elizabeth Harris', googleId: '12345364gwt43'}, {...}, {...}]
```

POST REQUEST
## addGuest 
**expects:**

```
req.body = {
  guestName: 'Ender',
  eventName: 'Game'
}
```
**returns **
json object
```
{
googleId: '342ewr23',
name: 'ELizabeth Harris'
}
```

Common Problems:
* Material-UI installs at the wrong version, correct version is 0.15.0-alpha.2
* Need to add 2 dependencies to our app that are not in package.json yet
  * react-tap-event-plugin
  * react-dropzone

These were the errors that I received while trying to set up a fresh copy of the app
Waffle.io Badge!
[![Stories in Ready](https://badge.waffle.io/unassumingQuasar/unassumingQuasar.png?label=ready&title=Ready)](http://waffle.io/unassumingQuasar/unassumingQuasar)
