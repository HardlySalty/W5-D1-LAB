import { peoplesService } from "../services/PeoplesService.js";
import BaseController from "../utils/BaseController.js";




export class PeoplesController extends BaseController {
    
    constructor(){
        super('api/planet')

        this.router
            .get('/people', this.getPeoples)
            .get('/people/:peopleId', this.getPeopleById)
            .delete('/people/:peopleId', this.removePeople)

    }


    removePeople(req, res, next) {
        try {
            let peopleId = req.params.peopleId
            let removedPerson = peoplesService.removePerson(peopleId)

            res.send(removedPerson)

        } catch (error) {
            next(error)
        }
    }

    getPeopleById(req, res, next) {
        try {
            
            let peopleId = req.params.peopleId

            const person = peoplesService.getPeopleById(peopleId)

            res.send(person)

        } catch (error) {
            next(error)
        }
        
    }

    getPeoples(req, res, next) {
        try {
            
            let peoples = peoplesService.getPeoples()

            res.send(peoples)
        }
        catch (error) {
           next(error)
        }
    }

}