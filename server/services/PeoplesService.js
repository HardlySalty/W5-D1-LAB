import { fakeDb } from "../db/fakeDb.js"
import { BadRequest } from "../utils/Errors.js"



class PeoplesService{


    removePerson(peopleId) {

        const personIndex = fakeDb.peoples.findIndex(e => e.id == peopleId)

        if(personIndex == -1){
            throw new BadRequest("Bad Id")
        }

        const removed = fakeDb.peoples.splice(personIndex, 1)

        return removed[0]

    }


    getPeopleById(peopleId) {
        const person = fakeDb.peoples.find(e => e.id == peopleId)

        if(!person){
            throw new BadRequest("Bad Id")
        }

        return person

    }

    getPeoples() {
        return fakeDb.peoples
    }

}

export const peoplesService = new PeoplesService()