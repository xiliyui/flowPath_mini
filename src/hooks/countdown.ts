import { useEffect, useRef, useState } from 'react';

const useCountDown = (initCount = 60) => {
    const [count, setCount] = useState(() => initCount);
    const timer = useRef<any>(null);

    // 设置清除定时器,避免count还未为0时，组件已被Unmount
    useEffect(() => {
        return () => {
            clearInterval(timer.current);
        };
    }, []);

    // 监听count的变化
    useEffect(() => {
        if (count === 0) {
            clearInterval(timer.current);
        }
    }, [count, initCount]);

    // 定义定时器，每秒减一
    const run = () => {
        setCount(initCount);
        timer.current = setInterval(() => {
            setCount(pre => pre - 1);
        }, 1000);
    };

    const clear = () => {
        clearInterval(timer.current);
    };

    return { count, run, clear };
};

export default useCountDown;