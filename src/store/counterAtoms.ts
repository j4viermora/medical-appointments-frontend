import { atom } from 'jotai';
import { useAtom } from 'jotai';

const counterAtom = atom(0);

export const useCounter = (initialCounter: number = 1) => {
	const [counter, setCounter] = useAtom(counterAtom);

	const resetCounter = () => {
		setCounter(0);
	};

	const incrementCounter = () => {
		setCounter(counter + initialCounter);
	};

	const decrementCounter = () => {
		setCounter(counter - initialCounter);
	};

	const incrementBy = (by: number) => {
		setCounter(counter + by);
	};

	return {
		counter,
		resetCounter,
		incrementCounter,
		decrementCounter,
		incrementBy,
	};
};
