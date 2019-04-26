# React State vs Redux State

This is a quick boilerplate page for understanding redux store vs react store.

This example is created just for having an user profile form (click on
the header avatar to go there) where an user can edit some of his
personal data.

We see that we have also data related to the user in the header
(username, avatar), also there are 2 dummy pages, the{" "}
**invoices** and **items** pages where besides
that some other data we access the username also.

This example is created to have **setState()** state in the
user profile form, but use **Redux** to persist the
username (consisting of the firstname and lastname of the user) and the
user avatar.

As this is a dummy local example, the file upload doesn't work so
everytime you submit an image it will change between Thanos and Ironman :)
