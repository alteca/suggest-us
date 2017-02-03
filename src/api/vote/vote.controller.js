/**
 * GET     /api/votes              ->  index
 * POST    /api/votes              ->  create
 * GET     /api/votes/:id          ->  show
 * PUT     /api/votes/:id          ->  update
 * DELETE  /api/votes/:id          ->  destroy
 */

'use strict';

import sqldb from '../../sqldb';
const Vote = sqldb.Vote;

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

// Gets a list of votes
export function index(req, res) {
  return Vote.findAll()
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Gets a single votes from the DB
export function show(req, res) {
  return Vote.find({
    where: {
      id: req.params.id
    }
  })
  .then(handleEntityNotFound(res))
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Creates a new vote in the DB
export function create(req, res) {
  // test if nb of votes
  return Vote.find({
    where: sqldb.sequelize.where(
      sqldb.sequelize.fn('lower', sqldb.sequelize.col('name')),
      subjectName.toLowerCase()
    )
  })
  .then((entity) => {
    if(entity) {
      // return error
      return handleError(res, 409)({
        error: 'Number of votes exceed'
      });
    } else {
      return Vote.create(req.body);
    }
  })
  .then(responseWithResult(res, 201))
  .catch(handleError(res));
}
