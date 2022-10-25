import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mb-8"
      >
        <div className="collapse-title text-xl font-medium">
          1.What is CORS?
        </div>
        <div className="collapse-content text-white">
          <p>
            Cross-origin resource sharing (CORS) is a mechanism that allows
            restricted resources on a web page to be requested from another
            domain outside the domain from which the first resource was served.
            A web page may freely embed cross-origin images, stylesheets,
            scripts, iframes, and videos. Certain "cross-domain" requests,
            notably Ajax requests, are forbidden by default by the same-origin
            security policy. CORS defines a way in which a browser and server
            can interact to determine whether it is safe to allow the
            cross-origin request. It allows for more freedom and functionality
            than purely same-origin requests, but is more secure than simply
            allowing all cross-origin requests. The specification for CORS is
            included as part of the WHATWG's Fetch Living Standard. This
            specification describes how CORS is currently implemented in
            browsers. An earlier specification was published as a W3C
            Recommendation.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mb-8"
      >
        <div className="collapse-title text-xl font-medium">
          2.How does Firebase works? What are the alternatives of Firebase?
        </div>
        <div className="collapse-content text-white">
          <p>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. The Alternatives of FireBase are:
            <ol className="mt-2">
              <li>1.MongDB</li>
              <li>2.Oracle Database</li>
              <li>3.Amazon RedShift</li>
              <li>4.DataStax Enterprise</li>
              <li>5.Redis Enterprise Cloud</li>
              <li>6.Db2</li>
            </ol>
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mb-8"
      >
        <div className="collapse-title text-xl font-medium">
          3.How does Private Route work?
        </div>
        <div className="collapse-content text-white">
          <p>
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4.What is Node? How does it work?
        </div>
        <div className="collapse-content">
          <p>
            Node.js is an open source server environment. Node.js is free.
            Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X,
            etc.). Node.js uses JavaScript on the server.Node.js eliminates the
            waiting, and simply continues with the next request. Node.js runs
            single-threaded, non-blocking, asynchronous programming, which is
            very memory efficient.
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
