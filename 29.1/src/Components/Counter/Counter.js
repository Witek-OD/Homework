import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../Slice/counterSlice';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>

                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
}