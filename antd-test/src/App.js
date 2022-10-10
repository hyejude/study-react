import { React, useState } from "react";
import { Button, Tooltip, Table, Modal } from "antd";
import { FilterOutlined } from "@ant-design/icons"



const dataSource = [
  {
    key: '1',
    a: '111',
    b: '222',
    name: 'mang',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    a: '',
    b: '444',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    a: '',
    b: '456',
    age: 41,
    address: '10 Downing Street',
  },
  {
    key: '4',
    a: '789',
    b: '000',
    age: 43,
    address: '10 Downing Street',
  },
];

var selectedKey = ''
var modalDataSource = []
var modalDataSelected = false



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    children: [
      {
        title: 'a',
        dataIndex: 'a',
        key: 'a',
        onCell: (record, rowIndex) => {
          return {
            onClick: (e) => {
              // console.log(record, e.target.textContent);
              Object.entries(record).map(value => (
                value[1] === e.target.textContent
                  ? selectedKey = value[0]
                  : null
              ))
              dataSource.map(value => (
                Object.entries(value).map(item => (
                  item[0] === selectedKey
                    // ? (!item[1] ? console.log(value, selectedKey, 'true') : console.log(selectedKey, item[1], 'false'))
                    ? (!item[1] ? modalDataSource.push(value) : console.log(selectedKey, item[1], 'false'))
                    : null
                ))
              ))
              if (modalDataSource) {
                modalDataSelected = true
              }
            }
          };
        },
      },
      {
        title: 'b',
        dataIndex: 'b',
        key: 'b',
        onCell: (record, rowIndex) => {
          return {
            onClick: (e) => {
              // console.log(record, e.target.textContent);
              Object.entries(record).map(value => (
                value[1] === e.target.textContent
                  ? selectedKey = value[0]
                  : null
              ))
            }
          };
        },
      }
    ]

  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',

  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
    console.log('modalDataSelected', modalDataSelected)
    console.log('modalDataSource', modalDataSource)
  }
  const rowSelection = () => {

  }

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
      <Button onClick={onClick}>조회</Button>
      {modalDataSelected &&
        <Modal title='test' open={isModalOpen}>
          <Table
            dataSource={modalDataSource}
            columns={columns}
            rowSelection={{}}
          />
        </Modal>
      }
    </div >
  );
};

export default App;