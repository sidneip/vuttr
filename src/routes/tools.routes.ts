import { Router, Request, Response } from 'express';
import Tool from '../models/Tool'
const toolsRouter = Router();


const tools : Array<Tool> = [];

toolsRouter.get('/', (request: Request, response: Response) => {
  const tagSearch = request.query.tag
  if(tagSearch){
    const toolsFilter = tools.filter( (tool: ToolInterface) => {
      return tool.tags.includes(tagSearch)
    })
    return response.json(toolsFilter)
  }else{
    return response.json(tools)
  }
})

toolsRouter.post('/', (request: Request, response: Response) => {
  const {title, link, description, tags} = request.body;

  const tool = new Tool(title, link, description, tags);
  tools.push(tool);
  response.status(201).json(tool)
})

toolsRouter.delete('/:title', (request: Request, response: Response) => {
  const {title} = request.params
  const indexToolToRemove = tools.findIndex( tool => tool.title == title)
  if(indexToolToRemove > -1){
    tools.splice(indexToolToRemove, 1)
    response.status(201).json(tools)
  }else{
    response.status(404)
  }
})



export default toolsRouter;