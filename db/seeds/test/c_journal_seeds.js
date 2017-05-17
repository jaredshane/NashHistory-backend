exports.seed = function(knex, Promise) {
  return knex('journal').del() //deletes all entries
  .then(function () {
    return Promise.all([
      knex('journal').insert({
        "entry": "Integer ac leo. Pellentesque ultrices mattis odio.",
        "photo_url": "http://dummyimage.com/145x206.bmp/ff4444/ffffff",
        "user_id": 16
      }),
      knex('journal').insert({
        "entry": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "photo_url": "http://dummyimage.com/242x106.jpg/5fa2dd/ffffff",
        "user_id": 18
      }),
      knex('journal').insert({
        "entry": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "photo_url": "http://dummyimage.com/212x188.png/cc0000/ffffff",
        "user_id": 3
      }),
      knex('journal').insert({
        "entry": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "photo_url": "http://dummyimage.com/231x246.jpg/5fa2dd/ffffff",
        "user_id": 8
      }),
      knex('journal').insert({
        "entry": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "photo_url": "http://dummyimage.com/159x109.png/ff4444/ffffff",
        "user_id": 11
      }),
      knex('journal').insert({
        "entry": "Mauris sit amet eros.",
        "photo_url": "http://dummyimage.com/121x231.png/ff4444/ffffff",
        "user_id": 2
      }),
      knex('journal').insert({
        "entry": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "photo_url": "http://dummyimage.com/173x144.jpg/5fa2dd/ffffff",
        "user_id": 8
      }),
      knex('journal').insert({
        "entry": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "photo_url": "http://dummyimage.com/168x174.jpg/5fa2dd/ffffff",
        "user_id": 2
      }),
      knex('journal').insert({
        "entry": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
        "photo_url": "http://dummyimage.com/185x150.jpg/5fa2dd/ffffff",
        "user_id": 15
      }),
      knex('journal').insert({
        "entry": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        "photo_url": "http://dummyimage.com/175x108.bmp/dddddd/000000",
        "user_id": 10
      }),
      knex('journal').insert({
        "entry": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "photo_url": "http://dummyimage.com/166x128.bmp/ff4444/ffffff",
        "user_id": 8
      }),
      knex('journal').insert({
        "entry": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "photo_url": "http://dummyimage.com/198x146.png/dddddd/000000",
        "user_id": 18
      }),
      knex('journal').insert({
        "entry": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "photo_url": "http://dummyimage.com/194x162.jpg/dddddd/000000",
        "user_id": 13
      }),
      knex('journal').insert({
        "entry": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "photo_url": "http://dummyimage.com/151x172.jpg/ff4444/ffffff",
        "user_id": 11
      }),
      knex('journal').insert({
        "entry": "Vivamus vestibulum sagittis sapien.",
        "photo_url": "http://dummyimage.com/172x105.png/5fa2dd/ffffff",
        "user_id": 2
      }),
      knex('journal').insert({
        "entry": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
        "photo_url": "http://dummyimage.com/236x155.png/ff4444/ffffff",
        "user_id": 15
      }),
      knex('journal').insert({
        "entry": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        "photo_url": "http://dummyimage.com/250x121.png/5fa2dd/ffffff",
        "user_id": 2
      }),
      knex('journal').insert({
        "entry": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "photo_url": "http://dummyimage.com/138x167.bmp/cc0000/ffffff",
        "user_id": 20
      }),
      knex('journal').insert({
        "entry": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "photo_url": "http://dummyimage.com/161x122.png/dddddd/000000",
        "user_id": 3
      }),
      knex('journal').insert({
        "entry": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "photo_url": "http://dummyimage.com/121x217.bmp/5fa2dd/ffffff",
        "user_id": 19
      })
    ])
  })
}
