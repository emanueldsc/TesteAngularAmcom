import { User } from "../domain/interfaces/User"

const UserValid: User = {
    name: "Mariane de Sousa Oliveira",
    situation: 'Regular',
    accoutNumberApplication: '557932-4',
    accoutNumberCheck: '778461-8'
}

const UserNotValid: User = {
    name: "User NotValid",
    situation: 'Irregular',
    accoutNumberApplication: '000000-0',
    accoutNumberCheck: '000000-0'

}

export {
    UserValid, UserNotValid
}
