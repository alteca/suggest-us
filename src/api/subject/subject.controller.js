/**
 * GET     /api/subjects              ->  index
 * POST    /api/subjects              ->  create
 * GET     /api/subjects/:id          ->  show
 * PUT     /api/subjects/:id          ->  update
 * DELETE  /api/subjects/:id          ->  destroy
 */

'use strict';

import sqldb from '../../sqldb';
const Subject = sqldb.Subject;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
          return entity;
        });
    }
    return null;
  };
}

// Gets a list of Subjects
export function index(req, res) {
  return Subject.findAll()
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Gets a single Subject from the DB
export function show(req, res) {
  return Subject.find({
    where: {
      id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Creates a new Subject in the DB
export function create(req, res) {
  const subjectName = req.body.name;
  // test if the subject already exists
  return Subject.find({
    where: sqldb.sequelize.where(
      sqldb.sequelize.fn('lower', sqldb.sequelize.col('name')),
      subjectName.toLowerCase()
    )
  })
  .then((entity) => {
    if(entity) {
      // return error
      return handleError(res, 409)({
        error: 'Subject "' + subjectName + '" already exists'
      });
    } else {
      return Subject.create(req.body);
    }
  })
  .then(responseWithResult(res, 201))
  .catch(handleError(res));
}
