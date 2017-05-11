exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('users').insert({
          "id": 1,
          "email": "rburgen0@paypal.com",
          "password": "Au6Hprh"
          }),
        knex('users').insert({
          "id": 2,
          "email": "ebuckett1@guardian.co.uk",
          "password": "oeNhtz"
        }),
        knex('users').insert({
          "id": 3,
          "email": "mcouvet2@yellowbook.com",
          "password": "6N9xUKghvhH"
        }),
        knex('users').insert({
          "id": 4,
          "email": "fjarrett3@smh.com.au",
          "password": "BAperW"
        }),
        knex('users').insert({
          "id": 4,
          "email": "fjarrett3@smh.com.au",
          "password": "BAperW"

        }),
        knex('users').insert({
          "id": 5,
          "email": "ldinkin4@booking.com",
          "password": "Zy491FEE4"
        }),
        knex('users').insert({
          "id": 6,
          "email": "narnaut5@hibu.com",
          "password": "bgcyiyr6at"
        }),
        knex('users').insert({
          "id": 7,
          "email": "ccoll6@sciencedaily.com",
          "password": "luNVA9W"
        }),
        knex('users').insert({
          "id": 8,
          "email": "icookson7@goo.gl",
          "password": "ctNKlnEHRcZD"
        }),
        knex('users').insert({
          "id": 9,
          "email": "kgrew8@qq.com",
          "password": "tYtNGE"
        }),
        knex('users').insert({
          "id": 10,
          "email": "hstilwell9@is.gd",
          "password": "npPMhD"
        }),
        knex('users').insert({
          "id": 11,
          "email": "atilletta@netscape.com",
          "password": "JAj1WAPokqFq"
        }),
        knex('users').insert({
          "id": 12,
          "email": "dboerdermanb@networksolutions.com",
          "password": "YXjaBro"
        }),
        knex('users').insert({
          "id": 13,
          "email": "fguidoc@free.fr",
          "password": "fSPMDA3nQl"
        }),
        knex('users').insert({
          "id": 14,
          "email": "hscallyd@oakley.com",
          "password": "1NBBAX8NC"
        }),
        knex('users').insert({
          "id": 15,
          "email": "bpercye@ft.com",
          "password": "3nKvrOIIo7B3"
        }),
        knex('users').insert({
          "id": 16,
          "email": "srennief@harvard.edu",
          "password": "G8sNcThQwqn"
        }),
        knex('users').insert({
          "id": 17,
          "email": "mwaddicorg@facebook.com",
          "password": "7TbmtXot"
        }),
        knex('users').insert({
          "id": 18,
          "email": "hwestgarthh@cpanel.net",
          "password": "3d6y0tTzt"
        }),
        knex('users').insert({
          "id": 19,
          "email": "mpennycordi@webeden.co.uk",
          "password": "OoI2X2"
        }),
        knex('users').insert({
          "id": 20,
          "email": "sgummiej@utexas.edu",
          "password": "8eIkmwPshr"
        })
      ]);
    });
};
