exports.seed = function(knex, Promise) {
  return knex('site_for_trip').del()
  .then(function () {
    return Promise.all([
      knex('site_for_trip').insert({
        "latitude": "49.79315",
        "longitude": "18.37607",
        "title": "support",
        "subtitle": "Down-sized bandwidth-monitored Graphic Interface",
        "number": "27.08917",
        "location": "Pre-emptive zero tolerance standardization",
        "user_id": 5
      }),
      knex('site_for_trip').insert({
        "latitude": "44.4",
        "longitude": "108.25",
        "title": "even-keeled",
        "subtitle": "Multi-channelled multimedia archive",
        "number": "14.26969",
        "location": "Progressive user-facing challenge",
        "user_id": 2
      }),
      knex('site_for_trip').insert({
        "latitude": "10.45397",
        "longitude": "-64.18256",
        "title": "Versatile",
        "subtitle": "Customer-focused asynchronous instruction set",
        "number": "30.74911",
        "location": "Enterprise-wide methodical concept",
        "user_id": 20
      }),
      knex('site_for_trip').insert({
        "latitude": "51.08651",
        "longitude": "25.00767",
        "title": "logistical",
        "subtitle": "Profit-focused high-level application",
        "number": "49.35128",
        "location": "Distributed clear-thinking conglomeration",
        "user_id": 9
      }),
      knex('site_for_trip').insert({
        "latitude": "63.4305",
        "longitude": "10.3951",
        "title": "Cross-group",
        "subtitle": "Mandatory empowering Graphical User Interface",
        "number": "10.20864",
        "location": "Customizable even-keeled open architecture",
        "user_id": 17
      }),
      knex('site_for_trip').insert({
        "latitude": "38.0918",
        "longitude": "111.80721",
        "title": "value-added",
        "subtitle": "De-engineered high-level migration",
        "number": "56.16974",
        "location": "Down-sized executive architecture",
        "user_id": 16
      }),
      knex('site_for_trip').insert({
        "latitude": "-27.4524",
        "longitude": "23.43246",
        "title": "Fundamental",
        "subtitle": "Right-sized 3rd generation ability",
        "number": "29.77761",
        "location": "Intuitive exuding matrix",
        "user_id": 11
      }),
      knex('site_for_trip').insert({
        "latitude": "20.0397",
        "longitude": "-101.645",
        "title": "multi-tasking",
        "subtitle": "Face to face maximized hub",
        "number": "47.5833",
        "location": "Multi-tiered tangible paradigm",
        "user_id": 6
      }),
      knex('site_for_trip').insert({
        "latitude": "-8.2137",
        "longitude": "114.3818",
        "title": "3rd generation",
        "subtitle": "Exclusive solution-oriented time-frame",
        "number": "37.44331",
        "location": "Innovative cohesive secured line",
        "user_id": 19
      }),
      knex('site_for_trip').insert({
        "latitude": "-9.906",
        "longitude": "124.5313",
        "title": "Adaptive",
        "subtitle": "Multi-channelled demand-driven task-force",
        "number": "33.91636",
        "location": "Multi-lateral bottom-line protocol",
        "user_id": 11
      }),
      knex('site_for_trip').insert({
        "latitude": "-2.87056",
        "longitude": "30.52806",
        "title": "Up-sized",
        "subtitle": "Fundamental 24 hour neural-net",
        "number": "52.331",
        "location": "Object-based asynchronous knowledge base",
        "user_id": 5
      }),
      knex('site_for_trip').insert({
        "latitude": "52.11679",
        "longitude": "-106.63452",
        "title": "migration",
        "subtitle": "Cross-platform eco-centric system engine",
        "number": "14.2526",
        "location": "Switchable mission-critical instruction set",
        "user_id": 4
      }),
      knex('site_for_trip').insert({
        "latitude": "49.97954",
        "longitude": "16.56475",
        "title": "content-based",
        "subtitle": "Profit-focused scalable local area network",
        "number": "18.23801",
        "location": "Configurable fresh-thinking access",
        "user_id": 9
      }),
      knex('site_for_trip').insert({
        "latitude": "-10.5732",
        "longitude": "121.7388",
        "title": "Diverse",
        "subtitle": "Pre-emptive intermediate alliance",
        "number": "-8.8601",
        "location": "Synergistic directional internet solution",
        "user_id": 18
      }),
      knex('site_for_trip').insert({
        "latitude": "28.34659",
        "longitude": "115.32742",
        "title": "multi-tasking",
        "subtitle": "Fundamental needs-based collaboration",
        "number": "53.14083",
        "location": "Innovative high-level architecture",
        "user_id": 13
      }),
      knex('site_for_trip').insert({
        "latitude": "24.38583",
        "longitude": "115.43068",
        "title": "website",
        "subtitle": "Stand-alone tertiary policy",
        "number": "-20.03849",
        "location": "Profound zero administration emulation",
        "user_id": 18
      }),
      knex('site_for_trip').insert({
        "latitude": "11.2202",
        "longitude": "123.6925",
        "title": "alliance",
        "subtitle": "Intuitive systematic ability",
        "number": "35.3242",
        "location": "Quality-focused demand-driven intranet",
        "user_id": 20
      }),
      knex('site_for_trip').insert({
        "latitude": "-7.3635",
        "longitude": "108.3156",
        "title": "Integrated",
        "subtitle": "Adaptive asymmetric toolset",
        "number": "-6.9933",
        "location": "Intuitive scalable forecast",
        "user_id": 1
      }),
      knex('site_for_trip').insert({
        "latitude": "-21.19361",
        "longitude": "-48.16389",
        "title": "encoding",
        "subtitle": "Profound mobile hierarchy",
        "number": "35.36667",
        "location": "Reactive reciprocal workforce",
        "user_id": 10
      }),
      knex('site_for_trip').insert({
        "latitude": "51.78167",
        "longitude": "87.26306",
        "title": "Reactive",
        "subtitle": "Balanced directional array",
        "number": "-28.35889",
        "location": "Multi-lateral needs-based support",
        "user_id": 16
      })
    ])
  })
}
