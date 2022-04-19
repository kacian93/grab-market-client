import React from 'react';

function TimerComponent(){
    //처음 시작을 0으로 한다
    // const [ time, setTime ] = react.useState(0);
    // console.log('컴포넌트 업데이트');
    // function UpdateTime(){
    //     setTime(time+1);
    // };
    // return (
    //   <div>
    //       <h3>{time}초</h3>
    //       <button onClick={UpdateTime}>1씩 올려주세요</button>
    //   </div>
    // );
    const [ time, setTime ] = React.useState(0);
    console.log('컴포넌트 업데이트');
    React.useEffect(function(){
    setTime(time+1);
    },[]);
    return (
        <div>
            <h3>{time}초</h3>
            <button>1씩 올려주세요</button>
        </div>
    );
}

export default TimerComponent;
