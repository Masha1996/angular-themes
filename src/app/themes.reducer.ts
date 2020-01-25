import { Action } from '@ngrx/store';

export function themesReducer(state: string = 'white-theme', action: Action) {

  switch (action.type) {

		case 'BLACK':
		  return state = 'black-theme'

    case 'WHITE':
      return state = 'white-theme'

		default:
			return state;
	}
}
