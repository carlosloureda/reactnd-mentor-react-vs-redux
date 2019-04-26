import React from "react";

const Home = () => (
  <div>
    <h1>Home page</h1>
    <div>
      <p>
        This is a quick boilerplate page for understanding redux store vs react
        store.
      </p>
      <p>
        This example is created just for having an user profile form (click on
        the header avatar to go there) where an user can edit some of his
        personal data.
      </p>
      <p>
        We see that we have also data related to the user in the header
        (username, avatar), also there are 2 dummy pages, the{" "}
        <strong>invoices</strong> and <strong>items</strong> pages where besides
        that some other data we access the username also.
      </p>
      <p>
        This example is created to have <strong>setState()</strong> state in the
        user profile form, but use <strong>Redux</strong> to persist the
        username (consisting of the firstname and lastname of the user) and the
        user avatar.
      </p>
      <p>
        As this is a dummy local example, the file upload doesn't work so
        everytime you submit an image it will change between Thanos and Ironman,
        :)
      </p>
    </div>
  </div>
);
export default Home;
