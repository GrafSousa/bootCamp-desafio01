const express = require('express');

const routes = express.Router();

const projects = [];
const url = '/projects';
const PROJECT_SUCCESSFULLY_ADDED = 'Project successfully added';
const PROJECT_SUCCESSFULLY_UPDATED = 'Project successfully updated';
const PROJECT_SUCCESSFULLY_DELETED = 'Project successfully deleted';
const TASK_SUCCESSFULLY_ADDED = 'Task successfully added';

let requestCounter = 0;

function getProjectIndex(id) {
  return projects.findIndex(project => project.id === id);
}

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const index = getProjectIndex(id);

  if (index === -1) {
    return res.status(400).json({ error: 'Project does not exists' });
  }

  return next();
}

routes.use(countNumberOfRequests);

function countNumberOfRequests(req, res, next) {
  requestCounter++;
  console.log(`Total of requests: ${requestCounter}`);
  next();
}

routes.post(`${url}`, (req, res) => {
  const { id } = req.body;

  if (existsProject(id) !== -1) {
    return res.status(409).json({ error: 'Project already exists '});
  }

  projects.push(req.body);

  return res.json({ message: PROJECT_SUCCESSFULLY_ADDED, projects});
});

function existsProject(id) {
  return getProjectIndex(id);
}

routes.post(`${url}/:id/tasks`, checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = getProject(id);

  if (existsTaskTitle(project, title) !== -1) {
    return res.status(409).json({ error: 'Task already exists' });
  }
  
  project.tasks.push(req.body);

  return res.json({ message: TASK_SUCCESSFULLY_ADDED, projects});
});

function existsTaskTitle(project, title) {
  return project.tasks.findIndex(task => task.title === title);
}

routes.get(`${url}`, (req, res) => {
  return res.json(projects);
});

routes.put(`${url}/:id`, checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = getProject(id);

  project.title = title;

  return res.json({ message: PROJECT_SUCCESSFULLY_UPDATED, projects});
});


function getProject(id) {
  const index = getProjectIndex(id);
  return projects[index];
}

routes.delete(`${url}/:id`, checkProjectExists, (req, res) => {
  const { id } = req.params;
  const index = getProjectIndex(id);

  projects.splice(index, 1);

  return res.json({ message: PROJECT_SUCCESSFULLY_DELETED });;
});

module.exports = routes;