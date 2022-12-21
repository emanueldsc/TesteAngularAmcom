import { User } from "../domain/interfaces/User"

const UserValid: User = {
    name: "Mariane de Sousa Oliveira",
    situation: 'Regular'
}

const UserNotValid: User = {
    name: "Mariane de Sousa Oliveira NotValid",
    situation: 'Irregular'
}

export {
    UserValid, UserNotValid
}
