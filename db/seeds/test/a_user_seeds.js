exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('users').insert({

          "email": "rburgen0@paypal.com",
          "password": "Au6Hprh"
          }),
        knex('users').insert({

          "email": "ebuckett1@guardian.co.uk",
          "password": "oeNhtz"
        }),
        knex('users').insert({

          "email": "mcouvet2@yellowbook.com",
          "password": "6N9xUKghvhH"
        }),
        knex('users').insert({

          "email": "fjarrett3@smh.com.au",
          "password": "BAperW"
        }),
        knex('users').insert({

          "email": "fjarrett3@smh.com.au",
          "password": "BAperW"

        }),
        knex('users').insert({

          "email": "ldinkin4@booking.com",
          "password": "Zy491FEE4"
        }),
        knex('users').insert({

          "email": "narnaut5@hibu.com",
          "password": "bgcyiyr6at"
        }),
        knex('users').insert({

          "email": "ccoll6@sciencedaily.com",
          "password": "luNVA9W"
        }),
        knex('users').insert({

          "email": "icookson7@goo.gl",
          "password": "ctNKlnEHRcZD"
        }),
        knex('users').insert({

          "email": "kgrew8@qq.com",
          "password": "tYtNGE"
        }),
        knex('users').insert({

          "email": "hstilwell9@is.gd",
          "password": "npPMhD"
        }),
        knex('users').insert({

          "email": "atilletta@netscape.com",
          "password": "JAj1WAPokqFq"
        }),
        knex('users').insert({

          "email": "dboerdermanb@networksolutions.com",
          "password": "YXjaBro"
        }),
        knex('users').insert({

          "email": "fguidoc@free.fr",
          "password": "fSPMDA3nQl"
        }),
        knex('users').insert({

          "email": "hscallyd@oakley.com",
          "password": "1NBBAX8NC"
        }),
        knex('users').insert({

          "email": "bpercye@ft.com",
          "password": "3nKvrOIIo7B3"
        }),
        knex('users').insert({

          "email": "srennief@harvard.edu",
          "password": "G8sNcThQwqn"
        }),
        knex('users').insert({

          "email": "mwaddicorg@facebook.com",
          "password": "7TbmtXot"
        }),
        knex('users').insert({

          "email": "hwestgarthh@cpanel.net",
          "password": "3d6y0tTzt"
        }),
        knex('users').insert({

          "email": "mpennycordi@webeden.co.uk",
          "password": "OoI2X2"
        }),
        knex('users').insert({

          "email": "sgummiej@utexas.edu",
          "password": "8eIkmwPshr"
        })
      ]);
    });
};
