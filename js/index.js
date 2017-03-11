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
        description: "Right now I'm a developer for a firm doing full stack development using Vue.js (an awesome library similar to ReactJS), Laravel, an MVC framework for PHP, and Sass. Also, Docker/containerization is amazing.",
        image: false
      }, 
      {
      title: "Education", 
      description: "I received my Bachelor's degree in Biological Engineering and a Master's in Biomedical Engineering from the University of Florida.", 
      image: "https://connect.ufl.edu/eng/syllabi/SiteAssets/SitePages/Home/GElogo.jpg"
      }, 
      {
      title: "Skills + Personal Projects", 
      description: "I thoroughly enjoy working on side-projects with Javascript, Node.js, PHP, Typescript, C# etc. I've worked on single page apps, a hybrid mobile application, and traditional MVC apps built with PHP or Ruby. I especially like thinking through and creating data models and crafting a great user experience.", 
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