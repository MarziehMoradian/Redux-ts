import { ActionType } from './../action-types/index';


interface SearchRepositorisAction {
    type:ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload :string[];
}


interface SearchRepositoriesErrorAction {
    type:ActionType.SEARCH_REPOSITORIES_ERROR
    payload :string;
}
export type Action = 
    |SearchRepositorisAction 
    |SearchRepositoriesSuccessAction
    |SearchRepositoriesErrorAction;
