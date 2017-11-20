# Service Entance Info Website

Companion webiste for [Service Entrance Info App](https://app.serviceentrance.info) based on [jekyll minima theme](https://github.com/jekyll/minima).

## Content

To create local repository run following commands:
* `git clone -b gh-pages https://github.com/mradenovic/service-entrance-info.git`
* `cd service-entrance-info`

### Static pages

To create a new static page, create a file in the pages directory. Files have to be named according to the following format:

`title.md`

Use following variables in the front matter:
* layout - `page` for pages with navigation links, `document` for other pages
* title - page title shown in navigation
* permalink - link to show in address bar
* navlink - set to `true` for pages with navigation link

### Posts

To create a new post, create a file in the _posts directory. Files have to be named according to the following format:

`YYYY-MM-DD-title.md`

For example, the following are examples of valid post filenames:

`2011-12-31-new-years-eve-is-awesome.md`

`2012-09-12-how-to-write-a-blog.md`

## Development

To set up your environment to develop and customize the website follow instructions for [jekyll minima theme](https://github.com/jekyll/minima).

## License

The code is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
