/**
 * GET     /api/votes              ->  index
 * POST    /api/votes              ->  create
 * GET     /api/votes/:id          ->  show
 * PUT     /api/votes/:id          ->  update
 * DELETE  /api/votes/:id          ->  destroy
 */

'use strict';

import sqldb from '../../sqldb';
const { Vote, User, Subject } = sqldb;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    console.log(err);
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
  const { subjectId, userId } = req.params;
  return Vote.find({
    where: {
      subjectId: subjectId,
      userId: userId
    }
  })
  .then(handleEntityNotFound(res))
  .then(responseWithResult(res))
  .catch(handleError(res));
}

// Creates a new vote in the DB
export function create(req, res) {
  Vote.create(req.body)
  .then(responseWithResult(res, 201))
  .catch(handleError(res));
}

// Deletes a Vote from the DB
export function destroy(req, res) {
  const { subjectId, userId } = req.params;
  return Vote.find({
    where: {
      subjectId: subjectId,
      userId: userId
    }
  })
  .then(handleEntityNotFound(res))
  .then(removeEntity(res))
  .catch(handleError(res));
}


export function synthesize(req, res) {
  return Vote.findAll({ include: [
    { model: User, required: true, attributes: ['username', 'id'] },
    { model: Subject, required: true, attributes: ['name', 'id'] }
   ]})
  .then(responseWithResult(res))
  .catch(handleError(res));

}
