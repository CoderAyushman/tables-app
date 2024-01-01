import React, { useState } from 'react'

const SingleTableGenerater = () => {
    const [num, setNum] = useState(2);

    const elements = [];

    for (let j = 1; j <= 10; j++) {
        elements.push({ number: num, second: j, result: num * j });
    }


    return (
        <>
            <form>
                <div className="form-group">

                    <div className="col-auto">
                        <input type="number" id='second' defaultValue={2} onChange={(e) => { setNum(e.target.value) }} className="form-control" aria-describedby="passwordHelpInline" />
                    </div>

                </div>


            </form>


            <div>
                {
                    elements.map((e, ind) => (
                        <p key={ind}>{e.number} X {e.second} = {e.result}</p>
                    ))
                }
            </div>


        </>
    )
}

export default SingleTableGenerater