import React from 'react';

const Student = [
    {
        ID: '0',
        Name: 'Chiến Duy',
        Age: '23',
        Address: 'Quảng Trị',
    },
    {
        ID: '1',
        Name: 'Hiếu Thiên',
        Age: '22',
        Address: 'Đà Nẵng',
    },
    {
        ID: '2',
        Name: 'Chơn Vũ',
        Age: '23',
        Address: 'Hà Nội',
    },
    {
        ID: '3',
        Name: 'Ngọc Phôi',
        Age: '21',
        Address: 'TP Hồ Chí Minh',
    },
];

const index = () => {
    return (
        <>
            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {Student.map((student, index) => (
                        <tr key={student.ID}>
                            <td>{index + 1}</td>
                            <td>{student.Name}</td>
                            <td>{student.Age}</td>
                            <td>{student.Address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default index;
