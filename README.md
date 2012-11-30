showcase
========

Demonstration presentations, eBooks, prototypes etc.

The main (deployed) URL is [http://showcase.learningmedia.co.nz](http://showcase.learningmedia.co.nz)

## Development ##
This app has been produced using the [Backbone.js](http://backbonejs.org/) library.

### Adding a new category ###
In order to add a new category to the home screen:

1. Edit the categories.js file, adding the details of the new category, e.g. 

        "ebooks":
        [
            { "name": "Bubbles",          "url": "categories/ebook/bubbles",       "image": "categories/ebook/bubbles/front.jpg"},
            { "name": "He Kurī",          "url": "categories/ebook/he-kuri",       "image": "categories/ebook/he-kuri/front.jpg"},
            { "name": "Ready to Read",    "url": "categories/ebook/rtr",           "image": "categories/ebook/rtr/front.jpg"},
            { "name": "Eke Panuku",       "url": "categories/ebook/eke_panuku",    "image": "categories/ebook/eke_panuku/front.jpg"}
        ],

2. Edit the index.html file, adding the route for the new category, e.g.

        var TilesRouter = Backbone.Router.extend({
           routes: {
               ...
               'ebook': 'ebook'
           },
           ...
           ebook: function(){
               this.getTiles('ebooks');
           },
           ...
        });

## Deployment ##

Deployment is controlled by [fabric](http://fabfile.org) and is simple as:

    fab localhost deploy

or 

    fab remote:username@showcase.learningmedia.co.nz deploy

Refer to the [fabfile.py](fabfile.py) for more information.

### Notes ###

As the **pastprojects** category is huge and contains lots of junk, the [.gitattributes](.gitattributes) file is set to ignore this during a deployment,
as nothing typically changes in this category from one deployment to another.

If you do wish to deploy **pastprojects**, then simply comment out the ignore in the .gitattributes file (remembering of source to uncomment it
once the deployment has finished.