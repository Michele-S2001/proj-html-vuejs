import { reactive } from "vue";

const store = reactive({
  navData: [
    {
      text: 'Home',
      link: '#',
      dropDownLinks: [
        {
          text: 'Home 1',
          href: '#'
        },
        {
          text: 'Home 2',
          href: '#'
        },
        {
          text: 'Home 3',
          href: '#'
        },
        {
          text: 'Home 4',
          href: '#'
        },
        {
          text: 'Home 5',
          href: '#'
        },
      ]
    },
    {
      text: 'Celebrity',
      link: '#',
      dropDownLinks: [
        {
          text: 'Celebrity 1',
          href: '#'
        },
        {
          text: 'Celebrity 2',
          href: '#'
        },
        {
          text: 'Celebrity 3',
          href: '#'
        },
        {
          text: 'Celebrity 4',
          href: '#'
        },
        {
          text: 'Celebrity 5',
          href: '#'
        },
      ]
    },
    {
      text: 'Movie',
      link: '#',
      dropDownLinks: [
        {
          text: 'Movie 1',
          href: '#'
        },
        {
          text: 'Movie 2',
          href: '#'
        }
      ]
    },
    {
      text: 'Page',
      link: '#',
      dropDownLinks: [
        {
          text: 'Page 1',
          href: '#'
        },
        {
          text: 'Page 2',
          href: '#'
        },
        {
          text: 'Page 3',
          href: '#'
        },
        {
          text: 'Page 4',
          href: '#'
        }
      ]
    },
    {
      text: 'Shop',
      link: '#',
      dropDownLinks: [
        {
          text: 'Shop 1',
          href: '#'
        },
        {
          text: 'Shop 2',
          href: '#'
        },
        {
          text: 'Shop 3',
          href: '#'
        }
      ]
    },
    {
      text: 'Blog',
      link: '#'
    },
    {
      text: 'Contacts Us',
      link: '#'
    },
  ],
  movies: [
    {
      rating: 0,
      title: 'Hurry animate blue strack new movie',
      category: 'Top rating',
      path: '../../../img/1.jpg',
      views: 381
    },
    {
      rating: 4,
      title: 'Quisque auctor movie in strack',
      category: 'Coming soon',
      path: '../../../img/2.jpg',
      views: 947
    },
    {
      rating: 0,
      title: 'New movie quisque in strack',
      category: 'Latest movie',
      path: '../../../img/5.jpg',
      views: 721
    },
    {
      rating: 0,
      title: 'Hurry animate blue strack new movie',
      category: 'Top rating',
      path: '../../../img/5.jpg',
      views: 381
    },
    {
      rating: 4,
      title: 'Quisque auctor movie in strack',
      category: 'TV Series',
      path: '../../../img/2.jpg',
      views: 947
    },
    {
      rating: 0,
      title: 'New movie quisque in strack',
      category: 'Latest movie',
      path: '../../../img/1.jpg',
      views: 721
    },
  ]
});

export default store;