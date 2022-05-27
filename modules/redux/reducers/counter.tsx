import { HYDRATE } from "next-redux-wrapper";
import {
	CounterState,
	counterActionType,
	CounterAction,
} from "../../interfaces";

export const initialState: CounterState = {
	counter: 0
};

interface HydratePayload {
	counter: CounterState;
}

const counter = (
	state = initialState,
	action: CounterAction | { type: typeof HYDRATE; payload: HydratePayload },
): CounterState => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload.counter };
		case counterActionType.COUNTER_INCREMENT:
			return {
				...state,
				...{ count: state.counter + 1 },
			};

		case counterActionType.COUNTER_DECREMENT:
			return {
				...state,
				...{ count: state.counter - 1 },
			};

		case counterActionType.COUNTER_RESET:
			return {
				...state,
				...{ count: initialState.counter },
			};

		default:
			return state;
	}
};
export default counter;