import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "../../modules/redux/store";
import { RootStateInterface } from "../../modules/interfaces/RootState";
import { CounterState } from "../../modules/interfaces";
import counter from "../../modules/redux/reducers/counter";

const Counter = () => {
	const { counter } = useSelector(
		(state: RootStateInterface): CounterState => state.counter,
	);
	const dispatch = useDispatch();
	const handleClick = (num: number) => {
		if (num === 1) {
			dispatch(counterIncrement());
		} else if (num === 0) {
			dispatch(counterDecrement());
		} else if (num === 2) {
			dispatch(counterReset());
		}
	};
	return (
		<div>
			<div>현재값:{counter}</div>
			<div>
				<button onClick={() => handleClick(1)}>+</button>
				<button onClick={() => handleClick(0)}>-</button>
				<button onClick={() => handleClick(2)}>reset</button>
			</div>
		</div>
	);
};
//export const getStaticProps = wrapper.getStaticProps(async (context) => {
//	console.log(context);
//});

export default Counter;