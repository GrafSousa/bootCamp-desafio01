const express = require('express');

const routes = express.Router();

const url = '/projects';
const projects = [];
const PROJECT_SUCCESSFULLY_ADDED = 'Project successfully added';
const PROJECT_SUCCESSFULLY_UPDATED = 'Project successfully updated';
const PROJECT_SUCCESSFULLY_DELETED = 'Project successfully deleted';
const TASK_SUCCESSFULLY_ADDED = 'Task successfully added';

function getProject(id) {
  const index = projects.findIndex(project => project.id === id);
  return projects[index];
}

routes.post(`${url}`, (req, res) => {
  projects.push(req.body);

  return res.json({ message: PROJECT_SUCCESSFULLY_ADDED, projects});
});

routes.post(`${url}/:id/tasks`, (req, res) => {
  const { id } = req.params;
  const project = getProject(id);
  
  project.tasks.push(req.body);

  return res.json({ message: TASK_SUCCESSFULLY_ADDED, projects});
});

routes.get(`${url}`, (req, res) => {
  return res.json(projects);
});

routes.put(`${url}/:id`, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = getProject(id);
  project.title = title;
  return res.json({ message: PROJECT_SUCCESSFULLY_UPDATED, projects});
});

routes.delete(`${url}/:id`, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(project => project.id === id);

  projects.splice(index, 1);

  return res.json({ message: PROJECT_SUCCESSFULLY_DELETED });;
});

module.exports = routes;