import React from 'react';
import { Table  } from 'antd';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    sorter: (a, b) => a.id.length - b.id.length,
    sortDirections: ['descend'],
    render: text => <a href={`${text}`}>{text}</a>
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
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
    title: 'Descripción',
    dataIndex: 'description',
    sorter: (a, b) => a.description.length - b.description.length,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Fecha de registro',
    dataIndex: 'registration_date',
    sorter: (a, b) => a.registration_date - b.registration_date,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Fecha de mantenimiento',
    dataIndex: 'maintenance_date',
    sorter: (a, b) => a.maintenance_date - b.maintenance_date,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: '¿Requiere Mantenimiento?',
    dataIndex: 'maintenance_required',
    sorter: (a, b) => a.maintenance_required - b.maintenance_required,
    sortDirections: ['descend', 'ascend']
  }  
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const Clients = (props) => {
    return (<Table columns={columns} dataSource={props.data} onChange={onChange} />);
}     

export default Clients;