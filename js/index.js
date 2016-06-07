var ProjectData =

angular.module('portfolio', [])

.controller('PortfolioController', function() {

  this.projectData = [{
        "githubURL": "https://github.com/nicholascm90/poll-people",
        "hostedURL": "https://upollster.herokuapp.com/",
        "description": "This is a MEAN (Mongo, Express, Angular, Node) app that utilizes Angular.js and Boostrap for the front end, and Node.JS, Express.js, and MongoDB for the server and database.",
        "title": "Upollster: An App for Polls!",
        "category": "Full Stack",
        "shortName": "PollApp"
      }, {
        "githubURL": "https://github.com/nicholascm90/file-meta",
        "hostedURL": "https://salty-spire-98994.herokuapp.com/",
        "description": "This app receives an uploaded file and returns a response with metadata about the file.",
        "title": "File Metadata",
        "category": "Full Stack",
        "shortName": "FileMetadata"
      },  {
        "githubURL": "https://github.com/nicholascm90/alternative-url",
        "hostedURL": "https://fierce-everglades-29355.herokuapp.com/",
        "description": "A small service providing even smaller URLs. This project built with Bootstrap, Node.js, and Express.js.",
        "title": "Alternative URL Generator",
        "category": "Back End",
        "shortName": "AlternativeURL"
      },{
        "githubURL": "https://github.com/nicholascm90/image-search-aggregator",
        "hostedURL": "https://fierce-everglades-82648.herokuapp.com/",
        "description": "An image aggregation api with a class which can be provided a list of credentials and return JSON for image search results. Each added API should have a mapping function to the desired JSON model.",
        "title":"Image Search Aggregator",
        "category":"Back End",
        "shortName": "ImageSearchAggregator"
      }, {
        "githubURL": "https://github.com/nicholascm90/image-search-aggregator",
        "hostedURL": "https://mysterious-badlands-94593.herokuapp.com/whoami",
        "description": "This service provides information about the machine of the request.",
        "title": "Who Am I Service?",
        "category": "Back End",
        "shortName": "WhoAmI"
      }, {
        "githubURL": "https://github.com/nicholascm90/timestamp_microscopic_service",
        "hostedURL": "https://fierce-atoll-74521.herokuapp.com/June%206,%202016",
        "description": "A microservice providing the unix and natural time when provided with either.",
        "title":"Time Stamp Microservice",
        "category":"Back End",
        "shortName": "TimeStampMicroservice"
      }
    ];

  this.getFullStack = function() {
      var fullStackProjects = this.projectData.filter(function(project) { return project.category == "Full Stack"});
      return fullStackProjects;
    }

  this.getBackEnd = function() {
      var backEndProjects = this.projectData.filter(function(project) { return project.category == "Back End"});
      return backEndProjects;
    }

    console.log(this.getFullStack());

/*
{
  "githubURL": "",
  "hostedURL": "",
  "description": "",
  "title":""
  "category":"Back End",
  "shortName":
}
*/
});
