/**
 * CommonJS / ESModule
 * const express = require('express')
 * import * as express from 'express'
 */
import express, { ErrorRequestHandler, RequestHandler } from 'express'
import flash from 'connect-flash'

// module.export = e
const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());

const middleware: RequestHandler<{ paramType: string }, { message: string }, { bodyType: number }, { queryType: boolean }, { localType: unknown }> = (req, res, next) => {
  req.params.paramType,
  req.body.bodyType;
  req.query.queryType;
  res.locals.localType;
  res.json({
    message: 'hello',
  })

  req.flash('플래시 메시지');
  req.flash('1회성', '플래시 메세지');
  req.flash();
};

app.use('/', middleware)

const errorMiddleware: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.log(err.status)
}

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
