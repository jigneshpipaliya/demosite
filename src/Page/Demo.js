import React, { useState } from 'react'

const Demo = () => {
    const [data, setData] = useState([
        { name: "Jenil", maths: 78, phy: 67, eng: 98 },
        { name: "Jenil 2", maths: 45, phy: 67, eng: 98 },
        { name: "Jenil 3", maths: 78, phy: 43, eng: 98 },
    ])

    const dataDeleteHandler = (inx) => {
        // alert(inx)
        const copyArr = [...data]
        copyArr.splice(inx, 1)
        setData(copyArr)
    }

    return (
        <div>
            <h1>Demo</h1>

        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Maths</th>
            </tr>
            {
                data.map((el, index) => {
                    return <tr>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.maths}</td>
                    <td><button onClick={() => dataDeleteHandler(index)}>Delete</button></td>
                </tr>
                })
            }
        </table>

           

        </div>
    )
}

export default Demo
