new Vue({
  el: '#portfolio',
  mounted() {
    console.log('mounted');
  },
  data: {
    queryText: "",
    info: [{
        title: "About Me", 
        description: "Lifelong learner. Professional developer. Former healthcare software product manager. Engineer. Lover of learning new languages/tech and working with a team.",
        image: false
      },
      {
        title: "Current Work", 
        description: "Right now I'm a developer for a firm building web applications using Vue.js (an awesome library similar to ReactJS) and Laravel, an MVC framework for PHP.",
        image: false
      }, 
      {
      title: "Education", 
      description: "I received my Bachelor's degree in Biological Engineering and a Master's in Biomedical Engineering from the University of Florida.", 
      image: "https://connect.ufl.edu/eng/syllabi/SiteAssets/SitePages/Home/GElogo.jpg"
      }, 
      {
      title: "Personal Projects", 
      description: "I thoroughly enjoy working on side-projects with Typescript, Javascript, C#, PHP, etc. See my github for examples of things I'm working on or have worked on in the past. ", 
      image: false
      }
    ],
    projects: [{
      title: 'Maxout',
      description: 'An app for tracking workout progress',
      languages: ['PHP', 'Javascript', 'CSS'],
      concepts: ['MVC', 'OOP'],
      libraries: ['ChartJS', 'jQuery', 'Laravel'],
      demo: 'https://google.com',
      repo: 'https://github.com'
    }, {
      title: 'Count Me In',
      description: "Find food. Say you're going there tonight!",
      languages: ['Typescript', 'CSS', 'PHP'],
      concepts: ['MVC', 'single page app', 'Hybrid App'],
      libraries: ['AngularJS', 'Ionic', 'Laravel'],
      demo: 'https://google.com',
      repo: 'https://github.com'
    }, {
      title: 'Upollster',
      description: 'Build polls, share them with your friends.',
      languages: ['Node.js', 'Javascript', 'CSS'],
      concepts: ['NoSQL', 'single page app'],
      libraries: ['AngularJS', 'ExpressJS', 'Bootstrap'],
      demo: 'https://google.com',
      repo: 'https://github.com'
    }],
  }, 
  computed: {
    filteredProjects() {
      return this.projects.filter(x => (x.description.indexOf(this.queryText) >= 0 || x.title.indexOf(this.queryText) >= 0)); 
    }
  }
});