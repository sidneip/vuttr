import { Router, Request, Response } from 'express';
import Tool from '../models/Tool'
import {getCustomRepository, Like} from 'typeorm'
import ToolsRepository from '../repositories/ToolsRepository'
import AppError from '../errors/AppError'
const toolsRouter = Router();


const tools : Array<Tool> = [];

toolsRouter.get('/', async (request: Request, response: Response) => {
  const toolsRepository = getCustomRepository(ToolsRepository)
  const tagSearch = request.query.tag
  if(tagSearch){
    const toolsFilter = await toolsRepository.createQueryBuilder('tools').where('tools.tags::text LIKE :tag', {tag: `%${tagSearch}%`}).getMany()
    return response.json(toolsFilter)
  }else{
    const toolsResult = await toolsRepository.find()
    return response.json(toolsResult)
  }
})

toolsRouter.post('/', async (request: Request, response: Response) => {
  const {title, link, description, tags} = request.body;
  const toolsRepository = getCustomRepository(ToolsRepository)
  const tool = toolsRepository.create({title, link, description, tags});
  await toolsRepository.save(tool)
  response.status(201).json(tool)
})

toolsRouter.delete('/:id', async (request: Request, response: Response) => {
  const {id} = request.params
  const toolsRepository = getCustomRepository(ToolsRepository)
  const toolDestroy = await toolsRepository.delete(id)
  if(toolDestroy && toolDestroy.affected! > 0){
    return response.status(204).json({})
  }else{
    return response.status(404).json({})
  }
})



export default toolsRouter;