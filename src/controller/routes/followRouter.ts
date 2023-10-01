import express from 'express'
import { FollowController } from '../FollowController'

export const followRouter = express.Router()

const followController = new FollowController()

followRouter.post('/:id', followController.following)

followRouter.get('/find/:id', followController.getFollow)