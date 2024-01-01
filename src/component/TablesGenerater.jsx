import React, { useEffect, useState } from 'react';

const tableGenerater = () => {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(10);

    const elements = [];
    for (let i = start; i <= end; i++) {
        for (let j = 1; j <= 10; j++) {
            elements.push({ first: i, second: j, result: i * j });
        }

    }

    return (
        <>
            <div className="alert alert-danger" role="alert">
            Warning: Entering a number with 4 or more digits in the second box will cause crash. 
            </div>
            <form>
                <div className="form-group">
                    {/* <div className="row auto align-items-center"> */}
                    <div className="col-auto">
                        First:<input type="number" id='first' defaultValue={1} onChange={(e) => { setStart(e.target.value) }} className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto">
                        Second:<input type="number" id='second' defaultValue={10} onChange={(e) => { setEnd(e.target.value) }} className="form-control" aria-describedby="passwordHelpInline" />
                    </div>

                    {/* </div> */}
                </div>

            </form>


            <div>
                {
                    elements.map((e, ind) => (
                        <p key={ind}>{e.first} X {e.second} = {e.result}</p>

                    ))
                }

            </div>


        </>
    )
}

export default tableGenerater;
