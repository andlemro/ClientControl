import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    sorter: (a, b) => a.id.length - b.id.length,
    sortDirections: ['descend']
  },
  {
    title: 'Nombre',
    dataIndex: 'client',
    sorter: (a, b) => a.client.length - b.client.length,
    sortDirections: ['descend']
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    sorter: (a, b) => a.phone - b.phone,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Marca',
    dataIndex: 'computer_brand',
    sorter: (a, b) => a.computer_brand.length - b.computer_brand.length,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Fecha de mantenimiento',
    dataIndex: 'maintenance_date',
    sorter: (a, b) => a.maintenance_date - b.maintenance_date,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    sorter: (a, b) => a.description.length - b.description.length,
    sortDirections: ['descend', 'ascend']
  }  
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const History = (props) => {
    return (<Table columns={columns} dataSource={[props.data]} onChange={onChange} />);
}     

export default History;