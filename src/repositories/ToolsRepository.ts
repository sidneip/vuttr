import Tool from '../models/Tool'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Tool)
class ToolsRepository extends Repository<Tool> {

}

export default ToolsRepository;