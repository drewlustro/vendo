# Vendo

> _Vendo is your friend at Ideas City!_

![Japan Vending](http://i.imgur.com/O142E5s.jpg)

### Structure

```bash
vendo
├── client # web browser frontend that users see
├── hardware # individual processes that report hardware status
│   ├── camera
│   ├── coinbox
│   └── presence
└── server # server that holds state and reports 
```

===

### Progress + Changelog

#### Feb 25, 2015 / v0.2.0

* ✔ Scaffold out Vendo web frontend client
* ✔ Add React + Browserify Support
* ✔ Integrate powpow support as gitsubmodule
* ✔ Practice writing React components (basic + ajax)
* ✔ Scaffold plans for server app and hardware listeners
* ✔ Paper-sketch out Vendo architecture
* ✔ Briefly research Instagram API

#### Roadmap

##### Camera

* _ Camera module test
* _ Camera module stateful reporting via python or node
* _ Display Camera image dump in web client frontend for verify step

##### Analog Sensors

* _ Yes/No button test
* _ Yes/No button signal integration via GPIO
* _ Quarter receiver test
* _ Quarter receiver signal integration via GPIO
* _ Object scan area detection test
* _ Object scan area signal integration via GPIO

##### APIs

* _ Basic Instagram API test via python lib
* _ Basic Twitter API test
* _ Add Instagram API methods to Vendo
* _ Add Twitter API methods to Vendo

##### Vendo Flow

* _ Scaffold out flow for each state of Kiosk
* _ Scaffold out flow for each state of Vend
* _ Add error reporting to all flows
* _ Polish Kiosk flow
* _ Polish Vend flow

##### Cloud Vendo Bot

* _ Scaffold Cloud Vendo Bot
* _ Basic data receive and store
* _ Add simple behavioral crons (commenting, likes)
* _ Be mindful of rate limiting and add restrictions
* _ Add AI for 'creep factor'
* _ Collect statistics
* _ Add endpoint for statistical readout for Kiosk mode

===

#### Architecture Sketch

![arch sketch](http://i.imgur.com/IhWXxi9.jpg)

- - -

### License

&copy; 2015 Maxrelax. All rights reserved.



<a href="https://maxrelax.co" target="_blank">![Maxrelax](http://i.imgur.com/aqo9Y6W.png)</a>
