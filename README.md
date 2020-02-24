# Demo Gatsby Portfolio

This is a demo to accompany a talk on building your portfolio with Gatsby.

It starts by building the site using a local JSON file, then switches to using [Sanity.io](https://sanity.io) for data to show how to reuse UI code with different data sources.

==============================================================================================================================================================================================================================================================================
What I did!


1. Fork

2. Change name of project

3. Clone

4. Install Dependicies
    Yarn
      yarn install
    Sanity
      yarn global add @sanity/cli


5. Git push
    It worked!

6. Yarn start
    It worked!

7. Followed instructions until 22:55
    Had issues finding <publicURL> in the (Ctrl+space) options in GraphiQL ecosystem.

    ie.
    {
    allSanityProject {
      edges {
        node {
          title
          url
          image {
            publicURL
          }
        }
      }
    }
  }

    Error: X Cannot query field "publicURL" on type "image_2"                                                               ...Not Understood...

    Fix: Edit GraphiQL query field to match query tree in index.js.

    ie.
    {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          url
          image {
            asset {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  }

  Run in GraphiQL!

  8.


